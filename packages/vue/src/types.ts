import type {
  ActiveSessionResource,
  ActJWTClaim,
  Clerk,
  ClerkOptions,
  ClientResource,
  CustomMenuItem,
  CustomPage,
  OrganizationCustomPermissionKey,
  OrganizationCustomRoleKey,
  OrganizationResource,
  UserResource,
  Without,
} from '@clerk/types';
import type { Component, ComputedRef, ShallowRef, Slot } from 'vue';

export interface VueClerkInjectionKeyType {
  clerk: ShallowRef<Clerk | null>;
  authCtx: ComputedRef<{
    userId: string | null | undefined;
    sessionId: string | null | undefined;
    actor: ActJWTClaim | null | undefined;
    orgId: string | null | undefined;
    orgRole: OrganizationCustomRoleKey | null | undefined;
    orgSlug: string | null | undefined;
    orgPermissions: OrganizationCustomPermissionKey[] | null | undefined;
  }>;
  clientCtx: ComputedRef<ClientResource | null | undefined>;
  sessionCtx: ComputedRef<ActiveSessionResource | null | undefined>;
  userCtx: ComputedRef<UserResource | null | undefined>;
  organizationCtx: ComputedRef<OrganizationResource | null | undefined>;
}

// Copied from `@clerk/clerk-react`
export interface HeadlessBrowserClerk extends Clerk {
  load: (opts?: Without<ClerkOptions, 'isSatellite'>) => Promise<void>;
  updateClient: (client: ClientResource) => void;
}

// Copied from `@clerk/clerk-react`
export interface BrowserClerk extends HeadlessBrowserClerk {
  onComponentsReady: Promise<void>;
  components: any;
}

export interface CustomPortalsRendererProps {
  customPagesPortals?: Map<HTMLDivElement, Slot>;
  customMenuItemsPortals?: Map<HTMLDivElement, Slot>;
}

export type CustomItemOrPageWithoutHandler<T> = Without<T, 'mount' | 'unmount' | 'mountIcon' | 'unmountIcon'>;

export type AddCustomMenuItemParams = {
  props: CustomItemOrPageWithoutHandler<CustomMenuItem>;
  iconSlot?: Slot;
  component: Component;
};

export type AddCustomPagesParams = {
  props: CustomItemOrPageWithoutHandler<CustomPage>;
  reorderItemsLabels: string[];
  defaultSlot?: Slot;
  iconSlot?: Slot;
};

export type AddUserProfileCustomPagesParams = Without<AddCustomPagesParams, 'reorderItemsLabels'>;
export type AddOrganizationProfileCustomPagesParams = Without<AddCustomPagesParams, 'reorderItemsLabels'>;

type PageProps<T extends string> =
  | {
      label: string;
      url: string;
    }
  | {
      label: T;
      url?: never;
    };

export type UserProfilePageProps = PageProps<'account' | 'security'>;

export type UserProfileLinkProps = {
  url: string;
  label: string;
};

type ButtonActionProps<T extends string> =
  | {
      label: string;
      onClick: () => void;
      open?: never;
    }
  | {
      label: T;
      onClick?: never;
      open?: never;
    }
  | {
      label: string;
      onClick?: never;
      open: string;
    };

export type UserButtonActionProps = ButtonActionProps<'manageAccount' | 'signOut'>;

export type UserButtonLinkProps = {
  href: string;
  label: string;
};

declare global {
  interface Window {
    Clerk: BrowserClerk;
  }
}