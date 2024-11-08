import type {
  CreateOrganizationProps,
  GoogleOneTapProps,
  OrganizationListProps,
  OrganizationProfileProps,
  OrganizationSwitcherProps,
  SignInProps,
  SignUpProps,
  UserButtonProps,
  UserProfileProps,
  WaitlistProps,
  Without,
} from '@clerk/types';
import { computed, defineComponent, h, inject, onScopeDispose, provide, ref, Teleport, watchEffect } from 'vue';

import { useClerk } from '../composables/useClerk';
import {
  OrganizationProfileInjectionKey,
  UserButtonInjectionKey,
  UserButtonMenuItemsInjectionKey,
  UserProfileInjectionKey,
} from '../keys';
import type {
  CustomPortalsRendererProps,
  UserButtonActionProps,
  UserButtonLinkProps,
  UserProfileLinkProps,
  UserProfilePageProps,
} from '../types';
import { useUserButtonCustomMenuItems } from '../utils/useCustomMenuItems';
import { useOrganizationProfileCustomPages, useUserProfileCustomPages } from '../utils/useCustomPages';
import { ClerkLoaded } from './controlComponents';

type AnyObject = Record<string, any>;

interface MountProps {
  mount: ((node: HTMLDivElement, props: AnyObject) => void) | undefined;
  unmount: ((node: HTMLDivElement) => void) | undefined;
  updateProps?: (props: { node: HTMLDivElement; props: AnyObject | undefined }) => void;
  props?: AnyObject;
}

/**
 * A utility component that handles mounting and unmounting of Clerk UI components.
 * The component only mounts when Clerk is fully loaded and automatically
 * handles cleanup on unmount.
 */
const Portal = defineComponent((props: MountProps) => {
  const portalRef = ref<HTMLDivElement | null>(null);
  const isPortalMounted = ref(false);
  // Make the props reactive so the watcher can react to changes
  const componentProps = computed(() => ({ ...props.props }));

  watchEffect(() => {
    if (!portalRef.value) {
      return;
    }

    if (isPortalMounted.value) {
      props.updateProps?.({ node: portalRef.value, props: componentProps.value });
    } else {
      props.mount?.(portalRef.value, componentProps.value);
      isPortalMounted.value = true;
    }
  });

  onScopeDispose(() => {
    if (isPortalMounted.value && portalRef.value) {
      props.unmount?.(portalRef.value);
    }
  });

  return () => h(ClerkLoaded, () => h('div', { ref: portalRef }));
});

const CustomPortalsRenderer = defineComponent((props: CustomPortalsRendererProps) => {
  return () => [
    ...Array.from(props?.customPagesPortals ?? new Map(), ([el, slot]) => {
      return h(Teleport, { to: el }, slot());
    }),
    ...Array.from(props?.customMenuItemsPortals ?? new Map(), ([el, slot]) => {
      return h(Teleport, { to: el }, slot());
    }),
  ];
});

const _UserProfile = defineComponent((props: UserProfileProps, { slots }) => {
  const clerk = useClerk();
  const { customPages, customPagesPortals, addCustomPage } = useUserProfileCustomPages();

  const finalProps = computed(() => ({
    ...props,
    customPages: customPages.value,
  }));

  provide(UserProfileInjectionKey, {
    addCustomPage,
  });

  return () => [
    h(Portal, {
      mount: clerk.value?.mountUserProfile,
      unmount: clerk.value?.unmountUserProfile,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props: finalProps.value,
    }),
    h(CustomPortalsRenderer, { customPagesPortals: customPagesPortals.value }),
    slots.default?.(),
  ];
});

const UserProfilePage = defineComponent((props: UserProfilePageProps, { slots }) => {
  const ctx = inject(UserProfileInjectionKey);
  if (!ctx) {
    throw new Error('UserButton.Action must be used inside a UserButton.MenuItems component');
  }

  ctx.addCustomPage({
    props,
    defaultSlot: slots.default,
    iconSlot: slots.labelIcon,
  });

  return () => null;
});

const UserProfileLink = defineComponent((props: UserProfileLinkProps, { slots }) => {
  const ctx = inject(UserProfileInjectionKey);
  if (!ctx) {
    throw new Error('UserButton.Action must be used inside a UserButton.MenuItems component');
  }

  ctx.addCustomPage({
    props,
    defaultSlot: slots.default,
    iconSlot: slots.labelIcon,
  });

  return () => null;
});

export const UserProfile = Object.assign(_UserProfile, {
  Page: UserProfilePage,
  Link: UserProfileLink,
});

type UserButtonPropsWithoutCustomMenuItems = Without<UserButtonProps, 'customMenuItems'>;

const _UserButton = defineComponent((props: UserButtonPropsWithoutCustomMenuItems, { slots }) => {
  const clerk = useClerk();

  const { customMenuItems, customMenuItemsPortals, addCustomMenuItem } = useUserButtonCustomMenuItems();
  const { customPages, customPagesPortals, addCustomPage } = useUserProfileCustomPages();

  const finalProps = computed<UserButtonProps>(() => ({
    ...props,
    userProfileProps: {
      ...(props.userProfileProps || {}),
      customPages: customPages.value,
    },
    customMenuItems: customMenuItems.value,
  }));

  provide(UserButtonInjectionKey, {
    addCustomMenuItem,
  });
  provide(UserProfileInjectionKey, {
    addCustomPage,
  });

  return () => [
    h(Portal, {
      mount: clerk.value?.mountUserButton,
      unmount: clerk.value?.unmountUserButton,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props: finalProps.value,
    }),
    h(CustomPortalsRenderer, {
      customPagesPortals: customPagesPortals.value,
      customMenuItemsPortals: customMenuItemsPortals.value,
    }),
    slots.default?.(),
  ];
});

const MenuItems = defineComponent((_, { slots }) => {
  const ctx = inject(UserButtonInjectionKey);

  if (!ctx) {
    throw new Error('UserButton.MenuItems must be used inside a UserButton component');
  }

  provide(UserButtonMenuItemsInjectionKey, ctx);
  return () => slots.default?.();
});

export const MenuAction = defineComponent(
  (props: UserButtonActionProps, { slots }) => {
    const ctx = inject(UserButtonMenuItemsInjectionKey);
    if (!ctx) {
      throw new Error('UserButton.Action must be used inside a UserButton.MenuItems component');
    }

    ctx.addCustomMenuItem({
      props,
      iconSlot: slots.labelIcon,
      component: MenuAction,
    });

    return () => null;
  },
  { name: 'MenuAction' },
);

export const MenuLink = defineComponent(
  (props: UserButtonLinkProps, { slots }) => {
    const ctx = inject(UserButtonMenuItemsInjectionKey);
    if (!ctx) {
      throw new Error('UserButton.Action must be used inside a UserButton.MenuItems component');
    }

    ctx.addCustomMenuItem({
      props,
      iconSlot: slots.labelIcon,
      component: MenuLink,
    });

    return () => null;
  },
  { name: 'MenuLink' },
);

export const UserButton = Object.assign(_UserButton, {
  MenuItems,
  Action: MenuAction,
  Link: MenuLink,
  UserProfilePage,
});

export const GoogleOneTap = defineComponent((props: GoogleOneTapProps) => {
  const clerk = useClerk();

  return () =>
    h(Portal, {
      mount: () => clerk.value?.openGoogleOneTap(props),
      unmount: clerk.value?.closeGoogleOneTap,
    });
});

export const SignIn = defineComponent((props: SignInProps) => {
  const clerk = useClerk();

  return () =>
    h(Portal, {
      mount: clerk.value?.mountSignIn,
      unmount: clerk.value?.unmountSignIn,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props,
    });
});

export const SignUp = defineComponent((props: SignUpProps) => {
  const clerk = useClerk();

  return () =>
    h(Portal, {
      mount: clerk.value?.mountSignUp,
      unmount: clerk.value?.unmountSignUp,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props,
    });
});

export const CreateOrganization = defineComponent((props: CreateOrganizationProps) => {
  const clerk = useClerk();

  return () =>
    h(Portal, {
      mount: clerk.value?.mountCreateOrganization,
      unmount: clerk.value?.unmountCreateOrganization,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props,
    });
});

export const OrganizationSwitcher = defineComponent((props: OrganizationSwitcherProps) => {
  const clerk = useClerk();

  return () =>
    h(Portal, {
      mount: clerk.value?.mountOrganizationSwitcher,
      unmount: clerk.value?.unmountOrganizationSwitcher,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props,
    });
});

export const OrganizationList = defineComponent((props: OrganizationListProps) => {
  const clerk = useClerk();

  return () =>
    h(Portal, {
      mount: clerk.value?.mountOrganizationList,
      unmount: clerk.value?.unmountOrganizationList,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props,
    });
});

const _OrganizationProfile = defineComponent((props: OrganizationProfileProps, { slots }) => {
  const clerk = useClerk();
  const { customPages, customPagesPortals, addCustomPage } = useOrganizationProfileCustomPages();

  const finalProps = computed(() => ({
    ...props,
    customPages: customPages.value,
  }));

  provide(OrganizationProfileInjectionKey, {
    addCustomPage,
  });

  return () => [
    h(Portal, {
      mount: clerk.value?.mountOrganizationProfile,
      unmount: clerk.value?.unmountOrganizationProfile,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props: finalProps.value,
    }),
    h(CustomPortalsRenderer, { customPagesPortals: customPagesPortals.value }),
    slots.default?.(),
  ];
});

const OrganizationProfilePage = defineComponent((props: UserProfilePageProps, { slots }) => {
  const ctx = inject(OrganizationProfileInjectionKey);
  if (!ctx) {
    throw new Error('UserButton.Action must be used inside a UserButton.MenuItems component');
  }

  ctx.addCustomPage({
    props,
    defaultSlot: slots.default,
    iconSlot: slots.labelIcon,
  });

  return () => null;
});

const OrganizationProfileLink = defineComponent((props: UserProfileLinkProps, { slots }) => {
  const ctx = inject(OrganizationProfileInjectionKey);
  if (!ctx) {
    throw new Error('UserButton.Action must be used inside a UserButton.MenuItems component');
  }

  ctx.addCustomPage({
    props,
    defaultSlot: slots.default,
    iconSlot: slots.labelIcon,
  });

  return () => null;
});

export const OrganizationProfile = Object.assign(_OrganizationProfile, {
  Page: OrganizationProfilePage,
  Link: OrganizationProfileLink,
});

export const Waitlist = defineComponent((props: WaitlistProps) => {
  const clerk = useClerk();

  return () =>
    h(Portal, {
      mount: clerk.value?.mountWaitlist,
      unmount: clerk.value?.unmountWaitlist,
      updateProps: (clerk.value as any)?.__unstable__updateProps,
      props,
    });
});