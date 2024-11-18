/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */

import type { LocalizationResource } from '@clerk/types';

export const arSA: LocalizationResource = {
  locale: 'ar-SA',
  __experimental_userVerification: {
    alternativeMethods: {
      actionLink: undefined,
      actionText: undefined,
      blockButton__backupCode: undefined,
      blockButton__emailCode: undefined,
      blockButton__password: undefined,
      blockButton__phoneCode: undefined,
      blockButton__totp: undefined,
      getHelp: {
        blockButton__emailSupport: undefined,
        content: undefined,
        title: undefined,
      },
      subtitle: undefined,
      title: undefined,
    },
    backupCodeMfa: {
      subtitle: undefined,
      title: undefined,
    },
    emailCode: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    noAvailableMethods: {
      message: undefined,
      subtitle: undefined,
      title: undefined,
    },
    password: {
      actionLink: undefined,
      subtitle: undefined,
      title: undefined,
    },
    phoneCode: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    phoneCodeMfa: {
      formTitle: undefined,
      resendButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    totpMfa: {
      formTitle: undefined,
      subtitle: undefined,
      title: undefined,
    },
  },
  backButton: 'الرجوع',
  badge__default: 'الأفتراضي',
  badge__otherImpersonatorDevice: 'جهاز منتحل آخر',
  badge__primary: 'الرئيسي',
  badge__requiresAction: 'الإجراء المطلوب',
  badge__thisDevice: 'هذا الجهاز',
  badge__unverified: 'لم يتم التحقق منه',
  badge__userDevice: 'جهاز المستخدم',
  badge__you: 'أنت',
  createOrganization: {
    formButtonSubmit: 'أنشاء منظمة',
    invitePage: {
      formButtonReset: 'تخطي',
    },
    title: 'أنشاء منظمة',
  },
  dates: {
    lastDay: "الأمس في {{ date | timeString('en-US') }}",
    next6Days: "{{ date | weekday('en-US','long') }} في {{ date | timeString('en-US') }}",
    nextDay: "غدا في {{ date | timeString('en-US') }}",
    numeric: "{{ date | numeric('en-US') }}",
    previous6Days: "أخر {{ date | weekday('en-US','long') }} في {{ date | timeString('en-US') }}",
    sameDay: "اليوم في {{ date | timeString('en-US') }}",
  },
  dividerText: 'أو',
  footerActionLink__useAnotherMethod: 'أختر طريقة أخرى',
  footerPageLink__help: 'المساعدة',
  footerPageLink__privacy: 'الخصوصية',
  footerPageLink__terms: 'الشروط',
  formButtonPrimary: 'متابعة',
  formButtonPrimary__verify: 'تحقق',
  formFieldAction__forgotPassword: 'نسيت كلمة المرور؟',
  formFieldError__matchingPasswords: 'كلمة المرور مطابقة',
  formFieldError__notMatchingPasswords: 'كلمة المرور لا تتطابق',
  formFieldError__verificationLinkExpired: 'صلاحية رمز التأكيد أنتهت. يرجى طلب رابط جديد',
  formFieldHintText__optional: 'إختياري',
  formFieldHintText__slug:
    '(slug) هو معرف يمكن قراءته بواسطة الإنسان ويجب أن يكون فريدًا. غالبًا ما يتم استخدامه في الروابط الإلكترونية.',
  formFieldInputPlaceholder__backupCode: undefined,
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'حذف الحساب',
  formFieldInputPlaceholder__emailAddress: undefined,
  formFieldInputPlaceholder__emailAddress_username: undefined,
  formFieldInputPlaceholder__emailAddresses: 'أدخل أو لصق عنوان بريد إلكتروني واحد أو أكثر ، مفصولة بمسافات أو فواصل',
  formFieldInputPlaceholder__firstName: undefined,
  formFieldInputPlaceholder__lastName: undefined,
  formFieldInputPlaceholder__organizationDomain: undefined,
  formFieldInputPlaceholder__organizationDomainEmailAddress: undefined,
  formFieldInputPlaceholder__organizationName: undefined,
  formFieldInputPlaceholder__organizationSlug: undefined,
  formFieldInputPlaceholder__password: undefined,
  formFieldInputPlaceholder__phoneNumber: undefined,
  formFieldInputPlaceholder__username: undefined,
  formFieldLabel__automaticInvitations: 'تمكين الدعوة الأوتماتكية لهذا النطاق',
  formFieldLabel__backupCode: 'الرمز الأحتياطي',
  formFieldLabel__confirmDeletion: 'تأكيد',
  formFieldLabel__confirmPassword: 'تأكيد كلمة المرور',
  formFieldLabel__currentPassword: 'كلمة المرور الحالية',
  formFieldLabel__emailAddress: 'العنوان الإلكتروني',
  formFieldLabel__emailAddress_username: 'العنوان الإلكتروني أو اسم المستخدم',
  formFieldLabel__emailAddresses: 'العناوين الإلكترونية',
  formFieldLabel__firstName: 'الاسم الأول',
  formFieldLabel__lastName: 'الاسم الأخير',
  formFieldLabel__newPassword: 'كلمة المرور الجديدة',
  formFieldLabel__organizationDomain: 'النطاق',
  formFieldLabel__organizationDomainDeletePending: 'حذف الدعوات والأقتراحات المعلقة',
  formFieldLabel__organizationDomainEmailAddress: 'عنوان البريد الإلكتروني للتحقق',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'أدخل البريد الإلكتروني الخاص بالنطاق للحصول على  الرمز والتحقق من النطاق',
  formFieldLabel__organizationName: 'اسم المنظمة',
  formFieldLabel__organizationSlug: 'رابط المنظمة',
  formFieldLabel__passkeyName: 'اسم مفتاح المرور (Passkey)',
  formFieldLabel__password: 'كلمة المرور',
  formFieldLabel__phoneNumber: 'رقم الجوال',
  formFieldLabel__role: 'دور',
  formFieldLabel__signOutOfOtherSessions: 'تسجيل الخروج من جميع الأجهزة',
  formFieldLabel__username: 'اسم المستخدم',
  impersonationFab: {
    action__signOut: 'تسجيل الخروج',
    title: 'تسجيل الدخول بأسم {{identifier}}',
  },
  maintenanceMode: 'نحن نقوم بعمل بعض التعديلات في الوقت الحالي. سوف نعود في غضون دقائق قليلة',
  membershipRole__admin: 'المسؤول',
  membershipRole__basicMember: 'عضو',
  membershipRole__guestMember: 'ضيف',
  organizationList: {
    action__createOrganization: 'أنشاء منظمة',
    action__invitationAccept: 'أنضمام',
    action__suggestionsAccept: 'طلب أنضمام',
    createOrganization: 'أنشاء منظمة',
    invitationAcceptedLabel: 'أنضميت',
    subtitle: 'للمتابعة إلى {{applicationName}}',
    suggestionsAcceptedLabel: 'موافقة معلقة',
    title: 'أختر حساب',
    titleWithoutPersonal: 'أختر منظمة',
  },
  organizationProfile: {
    badge__automaticInvitation: 'دعوات تلقائية',
    badge__automaticSuggestion: 'أقتراحات تلقائية',
    badge__manualInvitation: 'ليس هناك تسجيل تلقائي',
    badge__unverified: 'لم يتم التحقق منها',
    createDomainPage: {
      subtitle:
        'أضف النطاق للتحقق. المستخدمين الذين لديهم عناوين بريد إلكتروني على هذا النطاق يمكنهم تسجيل الدخول إلى المنظمة بشكل تلقائي أو طلب الأنضمام.',
      title: 'إضافة نطاق',
    },
    invitePage: {
      detailsTitle__inviteFailed: 'لا يمكن إرسال الدعوات. انظر لتفاصيل المشكلة وحاول مرة أخرى:',
      formButtonPrimary__continue: 'إرسال الدعوات',
      selectDropdown__role: 'إختر دور',
      subtitle: 'دعوة أعضاء جدد لهذه المنظمة',
      successMessage: 'تم إرسال الدعوات بنجاح',
      title: 'دعوة أعضاء',
    },
    membersPage: {
      action__invite: 'دعوة',
      activeMembersTab: {
        menuAction__remove: 'إزالة عضو',
        tableHeader__actions: undefined,
        tableHeader__joined: 'انضم',
        tableHeader__role: 'دور',
        tableHeader__user: 'مستخدم',
      },
      detailsTitle__emptyRow: 'لا يوجد أعضاء للعرض',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'قم بدعوة المستخدمين عن طريق توصيل نطاق بريد إلكتروني بمنظمتك. سيتمكن أي شخص يقوم بالتسجيل في مجال بريد إلكتروني مطابق من الانضمام إلى المنظمة في أي وقت.',
          headerTitle: 'الدعوات التلقائية',
          primaryButton: 'أدارة النطاقات الموثوقة',
        },
        table__emptyRow: 'لا دعوات للعرض',
      },
      invitedMembersTab: {
        menuAction__revoke: 'سحب الدعوة',
        tableHeader__invited: 'مدعو',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'سيتمكن المستخدمون الذين يشتركون في مجال بريد إلكتروني مطابق من رؤية اقتراح لطلب الانضمام إلى المنظمة.',
          headerTitle: 'اقتراحات تلقائية',
          primaryButton: 'إدارة النطاقات التي تم التحقق منها',
        },
        menuAction__approve: 'قبول',
        menuAction__reject: 'رفض',
        tableHeader__requested: 'طلب الأنضمام',
        table__emptyRow: 'لا توجد طلبات للعرض',
      },
      start: {
        headerTitle__invitations: 'الدعوات',
        headerTitle__members: 'الأعضاء',
        headerTitle__requests: 'الطلبات',
      },
    },
    navbar: {
      description: 'إدارة منظمتك.',
      general: 'عام',
      members: 'الأعضاء',
      title: 'المنظمة',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'أكتب {{organizationName}} بالأسفل للمتابعة.',
          messageLine1: 'هل أنت متأكد من انك تريد حذف هذه المنظمة',
          messageLine2: 'هذا القرار نهائي ولا يمكن التراجع عنه.',
          successMessage: 'لقد حذفت هذه المنظمة',
          title: 'حذف المنظمة',
        },
        leaveOrganization: {
          actionDescription: 'أكتب {{organizationName}} للمتابعة',
          messageLine1: 'هل أنت متاكد أنك تريد الخروج من المنظمة؟ سوف تفقد الصلاحيات لهذه المنظمة وجميع تطبيقاتها',
          messageLine2: 'هذا القرار نهائي ولا يمكن التراجع عنه.',
          successMessage: 'لقد غادرت المنظمة',
          title: 'الخروج من المنظمة',
        },
        title: 'خطر',
      },
      domainSection: {
        menuAction__manage: 'إدارة',
        menuAction__remove: 'حذف',
        menuAction__verify: 'تحقق',
        primaryButton: 'أضافة نطاق',
        subtitle:
          'السماح للمستخدمين للأنضمام للمنظمة بشكل تلقائي أو عن طريق دعوة للأنضمام على نطاق بريد إلكتروني تم التحقق منه',
        title: 'النطاقات التي تم التحقق منها',
      },
      successMessage: 'تم تحديث معلومات المنظمة',
      title: 'الملف الشخصي للمنظمة',
    },
    removeDomainPage: {
      messageLine1: 'سيتم حذف نطاق البريد الإلكتروني هذا{{domain}}.',
      messageLine2: 'لن يتمكن المستخدمون من الانضمام إلى المؤسسة تلقائيًا بعد ذلك.',
      successMessage: 'تم حذف هذا النطاق {{domain}}.',
      title: 'حذف النطاق',
    },
    start: {
      headerTitle__general: 'عام',
      headerTitle__members: 'الأعضاء',
      profileSection: {
        primaryButton: 'تحديث الملف الشخصي',
        title: 'ملف المنظمة',
        uploadAction__title: 'شعار',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: 'حذف هذا النطاق سيؤثر على المستخدمين المدعوين',
        removeDomainActionLabel__remove: 'حذف النطاق',
        removeDomainSubtitle: 'حذف هذا النطاق من من النطاقات المعتمدة',
        removeDomainTitle: 'حذف النطاق',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'تتم دعوة المستخدمين تلقائيًا للانضمام إلى المؤسسة عند تسجيل حساب جديد ويمكنهم الانضمام في أي وقت.',
        automaticInvitationOption__label: 'الدعوات التلقائية',
        automaticSuggestionOption__description:
          'يتلقى المستخدمون اقتراحًا لطلب الانضمام ، ولكن يجب أن يوافق عليه المشرف قبل أن يتمكنوا من الانضمام إلى المنظمة.',
        automaticSuggestionOption__label: 'اقتراحات تلقائية',
        calloutInfoLabel: 'إن تغيير وضع التسجيل سيؤثر فقط على المستخدمين الجدد.',
        calloutInvitationCountLabel: 'هناك {{count}} دعوة معلقة مرسلة إلى المستخدمين',
        calloutSuggestionCountLabel: 'هناك {{count}} أقتراح معلق مرسلة إلى المستخدمين',
        manualInvitationOption__description: 'يمكن دعوة المستخدمين يدويًا فقط للمؤسسة.',
        manualInvitationOption__label: 'لا يوجد تسجيل تلقائي',
        subtitle: 'أختر كيف يمكن للمستخدمين في هذا النطاق تسجيل الدخول إلى المنظمة',
      },
      start: {
        headerTitle__danger: 'خطر',
        headerTitle__enrollment: 'خيارات التسجيل',
      },
      subtitle: 'هذا النطاق {{domain}} موثوق الآن. يمكنك المتابعة وأختيار وضع التسجيل.',
      title: 'Update {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: 'أدخل رمز التحقق المرسل إلى بريدك الإلكتروني',
      formTitle: 'رمز التحقق',
      resendButton: 'لم يصلك الرمز؟ حاول مرة أخرى',
      subtitle: 'يجب التحقق من هذا النطاق {{domainName}} عن طريق بريد إلكتروني موثوق',
      subtitleVerificationCodeScreen: 'تم إرسال رمز تحقق إلى {{emailAddress}}. أدخل الرمز للمتابعة.',
      title: 'التحقق من النطاق',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'أنشاء منظمة',
    action__invitationAccept: 'أنضمام',
    action__manageOrganization: 'أدارة المنظمة',
    action__suggestionsAccept: 'طلب أنضمام',
    notSelected: 'لم يتم أختيار منظمة',
    personalWorkspace: 'الحساب الشخصي',
    suggestionsAcceptedLabel: 'موافقة معلقة',
  },
  paginationButton__next: 'التالي',
  paginationButton__previous: 'السابق',
  paginationRowText__displaying: 'عرض',
  paginationRowText__of: 'من',
  signIn: {
    accountSwitcher: {
      action__addAccount: 'إضافة حساب',
      action__signOutAll: 'تسجيل الخروج من جميع الحسابات',
      subtitle: 'قم بإختيار الحساب الذي تريد المتابعة به',
      title: 'إختر حساب',
    },
    alternativeMethods: {
      actionLink: 'الحصول على المساعدة',
      actionText: 'لا تملك اي من هؤلاء?',
      blockButton__backupCode: 'استخدم رمز النسخ الاحتياطي',
      blockButton__emailCode: 'رمز البريد الإلكتروني ل  {{identifier}}',
      blockButton__emailLink: 'رابط البريد الإلكتروني ل {{identifier}}',
      blockButton__passkey: 'تسجيل الدخول بمفتاح المرور الخاص بك',
      blockButton__password: 'تسجيل الدخول بكلمة السر الخاصة بك',
      blockButton__phoneCode: 'أرسال رسالة نصية ل{{identifier}}',
      blockButton__totp: 'استخدم تطبيق المصادقة الخاص بك',
      getHelp: {
        blockButton__emailSupport: 'بريد الدعم الفني',
        content:
          'إذا كنت تواجه صعوبة في تسجيل الدخول إلى حسابك ، راسلنا عبر البريد الإلكتروني وسنعمل معك لاستعادة الوصول في أقرب وقت ممكن.',
        title: 'الحصول على المساعدة',
      },
      subtitle: 'تواجه مشكلة؟ تستطيع استخدام أي من هذه الطرق لتسجيل الدخول',
      title: 'أستخدام طريقة أخرى',
    },
    backupCodeMfa: {
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'أدخل الرمز الأحتياطي',
    },
    emailCode: {
      formTitle: 'رمز التحقق',
      resendButton: 'لم يصلك اي رمز؟ حاول مرة أخرى.',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'التحقق من البريد الإلكتروني',
    },
    emailLink: {
      clientMismatch: {
        subtitle: 'للمتابعة, قم بفتح رابط التحقق عبر نفس الجهاز والمتصفح الذي انشأت محاولة تسجيل الدخول منه',
        title: 'رابط التحقق غير صالح على هذا الجهاز',
      },
      expired: {
        subtitle: 'ارجع إلى علامة التبويب الرئيسية للمتابعة.',
        title: 'انتهت صلاحية رابط التحقق هذا.',
      },
      failed: {
        subtitle: 'ارجع إلى علامة التبويب الرئيسية للمتابعة.',
        title: 'رابط التحقق هذا غير صالح',
      },
      formSubtitle: 'أستعمل رابط التحقق المرسل إلى بريدك الإلكتروني',
      formTitle: 'رابط التحقق',
      loading: {
        subtitle: 'ستتم إعادة توجيهك قريبًا',
        title: 'تسجيل الدخول...',
      },
      resendButton: 'لم يصلك الرابط؟ حاول مرة أخرى',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'التحقق من البريد الإلكتروني',
      unusedTab: {
        title: 'يمكنك أغلاق هذه النافذة',
      },
      verified: {
        subtitle: 'سيتم أعادة توجيهك في لحظات',
        title: 'تم تسجيل الحساب بنجاح',
      },
      verifiedSwitchTab: {
        subtitle: 'ارجع إلى علامة التبويب الرئيسية للمتابعة',
        subtitleNewTab: 'ارجع إلى علامة التبويب المفتوحة حديثًا للمتابعة',
        titleNewTab: 'تم تسجيل الدخول في علامة تبويب أخرى',
      },
    },
    forgotPassword: {
      formTitle: 'رمز تحقق لإعادة تعيين كلمة المرور',
      resendButton: 'لم يصلك أي رمز؟ حاول مرة أخرى.',
      subtitle: 'لأعادة تعيين كلمة المرور',
      subtitle_email: 'أولاً, قم بإدخال الرمز المرسل إلى الايميل الخاص بك',
      subtitle_phone: 'أولاً, قم بإدخال الرمز المرسل إلى رقم الهاتف الخاص بك',
      title: 'إعادة تعيين كلمة المرور',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'إعادة تعيين كلمة المرور',
      label__alternativeMethods: 'أو سجل الدخول بطريقة أخرى',
      title: 'نسيت كلمة المرور؟',
    },
    noAvailableMethods: {
      message: 'لا يمكن متابعة تسجيل الدخول. لا يوجد وسيلة مصادقة متاحة.',
      subtitle: 'حدث خطأ',
      title: 'لا يمكن تسجيل الدخول',
    },
    passkey: {
      subtitle:
        'يؤدي استخدام مفتاح المرور الخاص بك إلى تأكيد هويتك. جهازك الخاص قد يقوم بسؤالك عن بصمة الإصبع, او معرف الوجة او كلمة مرور قفل الشاشة',
      title: 'إستخدم مفتاح المرور',
    },
    password: {
      actionLink: 'أستعمل طريقة أخرى',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'ادخل كلمة المرور',
    },
    passwordPwned: {
      title: 'كلمة المرور غير آمنة',
    },
    phoneCode: {
      formTitle: 'رمز التحقق',
      resendButton: 'لم يصلك الرمز؟ حاول مرة أخرى',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'تحقق من هاتفك',
    },
    phoneCodeMfa: {
      formTitle: 'رمز التحقق',
      resendButton: 'لم يصلك الرمز؟ حاول مرة أخرى',
      subtitle: 'للمتابعة، يرجى إدخال رمز التحقق المرسل إلى هاتفك',
      title: 'تحقق من هاتفك',
    },
    resetPassword: {
      formButtonPrimary: 'أعادة تعيين كلمة المرور',
      requiredMessage:
        'يوجد حساب بالفعل بهذا البريد الإلكتروني لم يتم التحقق منه. الرجاء أعادة تعيين كلمة المرور لتأمين حسابك',
      successMessage: 'تم تغيير كلمة المرور بنجاح. يتم تسجيل الدخول الرجاء الأنتظار قليلا.',
      title: 'أعادة تعيين كلمة المرور',
    },
    resetPasswordMfa: {
      detailsLabel: 'نريد التحقق من هويتك قبل أعادة تعيين كلمة المرور',
    },
    start: {
      actionLink: 'إنشاء حساب جديد',
      actionLink__join_waitlist: undefined,
      actionLink__use_email: 'استخدم البريد الإلكتروني',
      actionLink__use_email_username: 'استخدم البريد الإلكتروني أو اسم المستخدم',
      actionLink__use_passkey: 'استخدم مفتاح المرور بدلاً من ذلك',
      actionLink__use_phone: 'استخدم رقم الجوال',
      actionLink__use_username: 'استخدم اسم المستخدم',
      actionText: 'ليس لديك حساب؟',
      actionText__join_waitlist: undefined,
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'تسجيل الدخول',
      titleCombined: undefined,
    },
    totpMfa: {
      formTitle: 'رمز التحقق',
      subtitle: 'للمتابعة، يرجى إدخال رمز التحقق الذي تم إنشاؤه بواسطة تطبيق المصادقة الخاص بك',
      title: 'نظام التحقق بخطوتين',
    },
  },
  signInEnterPasswordTitle: 'إدخل كلمة المرور',
  signUp: {
    continue: {
      actionLink: 'تسجيل الدخول',
      actionText: 'ليس لديك حساب؟',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'املأ الحقول المفقودة',
    },
    emailCode: {
      formSubtitle: 'أدخل رمز التحقق المرسل إلى بريدك الإلكتروني',
      formTitle: 'رمز التحقق',
      resendButton: 'لم يصلك الرمز؟ حاول مرة أخرى',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'تحقق من بريدك الإلكتروني',
    },
    emailLink: {
      clientMismatch: {
        subtitle: 'للمتابعة، افتح رابط التحقق على الجهاز والمتصفح الذي أنشأت محاولة عملية التسجيل منه',
        title: 'رابط التحقق غير صالح على هذا الجهاز',
      },
      formSubtitle: 'أستعمل رابط التحقق المرسل إلى بريدك الإلكتروني',
      formTitle: 'رابط التحقق',
      loading: {
        title: 'إنشاء حساب...',
      },
      resendButton: 'لم يصلك الرابط؟ حاول مرة أخرى',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'التحقق من البريد الإلكتروني',
      verified: {
        title: 'تم تسجيل الحساب بنجاح',
      },
      verifiedSwitchTab: {
        subtitle: 'ارجع إلى علامة التبويب المفتوحة حديثًا للمتابعة',
        subtitleNewTab: 'ارجع إلى علامة التبويب السابقة للمتابعة',
        title: 'تم التحقق بنجاح من البريد الإلكتروني',
      },
    },
    legalConsent: {
      checkbox: {
        label__onlyPrivacyPolicy: undefined,
        label__onlyTermsOfService: undefined,
        label__termsOfServiceAndPrivacyPolicy: undefined,
      },
      continue: {
        subtitle: undefined,
        title: undefined,
      },
    },
    phoneCode: {
      formSubtitle: 'أدخل رمز التحقق المرسل إلى هاتفك',
      formTitle: 'رمز التحقق',
      resendButton: 'لم يصلك الرمز؟ حاول مرة أخرى',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'تحقق من هاتفك',
    },
    restrictedAccess: {
      actionLink: undefined,
      actionText: undefined,
      blockButton__emailSupport: undefined,
      blockButton__joinWaitlist: undefined,
      subtitle: undefined,
      subtitleWaitlist: undefined,
      title: undefined,
    },
    start: {
      actionLink: 'تسجيل الدخول',
      actionLink__use_email: undefined,
      actionLink__use_phone: undefined,
      actionText: 'لديك حساب بالفعل؟',
      subtitle: 'للمتابعة إلى {{applicationName}}',
      title: 'أنشاء حساب جديد',
    },
  },
  socialButtonsBlockButton: 'للمتابعة مع {{provider|titleize}}',
  socialButtonsBlockButtonManyInView: '{{provider|titleize}}',
  unstable__errors: {
    already_a_member_in_organization: undefined,
    captcha_invalid:
      'لا يمكن تسجيل الحساب بسبب مشاكل تحقق أمنية. الرجاء تحديث الصفحة للمحاولة مرة أخرى أو تواصل معنا للمزيد من المساعدة',
    captcha_unavailable:
      'التسجيل غير ناجح بسبب فشل التحقق من صحة الروبوت. يُرجى تحديث الصفحة للمحاولة مرة أخرى أو التواصل مع فريق الدعم للحصول على مزيد من المساعدة',
    form_code_incorrect: undefined,
    form_identifier_exists: undefined,
    form_identifier_exists__email_address: 'تم إستخدام البريد الإلكتروني هذا. يرجى المحاولة مرة أخرى',
    form_identifier_exists__phone_number: 'تم إستخدام رقم الهاتف هذا. يرجى المحاولة مرة أخرى',
    form_identifier_exists__username: 'تم إستخدام اسم المستخدمد هذا. يرجى المحاولة مرة أخرى',
    form_identifier_not_found: undefined,
    form_param_format_invalid: undefined,
    form_param_format_invalid__email_address: 'يجب أستعمال بريد إلكتروني صالح',
    form_param_format_invalid__phone_number: 'Phone number must be in a valid international format',
    form_param_max_length_exceeded__first_name: 'الأسم الأول يجب الا يتجاوز 256 حرف',
    form_param_max_length_exceeded__last_name: 'الأسم الأخير يجب الا يتجاوز 256 حرف',
    form_param_max_length_exceeded__name: 'الأسم يجب الا يتجاوز 256 حرف',
    form_param_nil: undefined,
    form_param_value_invalid: undefined,
    form_password_incorrect: undefined,
    form_password_length_too_short: undefined,
    form_password_not_strong_enough: 'كلمة المرور ليست قوية',
    form_password_pwned: 'لا يمكن أستعمال كلمة السر هذه لانها غير أمنة, الرجاء اختيار كلمة مرور أخرى',
    form_password_pwned__sign_in: 'لا يمكن أستعمال كلمة السر هذه لانها غير أمنة, الرجاء اختيار كلمة مرور أخرى',
    form_password_size_in_bytes_exceeded:
      'تجاوزت كلمة المرور الحد الأقصى للحروف المدخلة, الرجاء أدخال كلمة مرور أقصر أو حذف بعض الأحرف الخاصة',
    form_password_validation_failed: 'كلمة مرور خاطئة',
    form_username_invalid_character: undefined,
    form_username_invalid_length: undefined,
    identification_deletion_failed: 'لا يمكن حذف هويتك الآخيرة ',
    not_allowed_access: undefined,
    organization_domain_blocked: undefined,
    organization_domain_common: undefined,
    organization_membership_quota_exceeded: undefined,
    organization_minimum_permissions_needed: undefined,
    passkey_already_exists: 'تم تسجيل مفتاح المرور مسبقاً مع هذا الجهاز',
    passkey_not_supported: 'مفاتيح المرور غير مدعومة على هذا الجهاز',
    passkey_pa_not_supported: 'يتطلب التسجيل أداة مصادقة النظام الأساسي ولكن الجهاز لا يدعمها',
    passkey_registration_cancelled: 'تم إلغاء تسجيل مفتاح المرور أو انتهت مهلته',
    passkey_retrieval_cancelled: 'تم إلغاء تسجيل مفتاح المرور أو انتهت مهلته',
    passwordComplexity: {
      maximumLength: 'أقل من {{length}} حروف',
      minimumLength: '{{length}} حروف أو أكثر',
      requireLowercase: 'حرف صغير',
      requireNumbers: 'رقم',
      requireSpecialCharacter: 'حرف خاص',
      requireUppercase: 'حرف كبير',
      sentencePrefix: 'كلمة السر يجب أن تحتوي على',
    },
    phone_number_exists: 'هذا الرقم مأخوذ الرجاء أختيار رقم آخر',
    zxcvbn: {
      couldBeStronger: 'كلمة مرورك سليمة من الأفضل ان تكون اقوى. الرجاء أضافة حروف أكثر',
      goodPassword: 'كلمة مرورك طابقت جميع المتطلبات الازمة',
      notEnough: 'كلمة المرور ليست قوية',
      suggestions: {
        allUppercase: 'أستعمل حروف كبيرة لبعض الحروف وليس كلها.',
        anotherWord: 'أضف المزيد من الكلمات الأقل شيوعًا.',
        associatedYears: 'تجنب السنوات المرتبطة بك.',
        capitalization: 'أستعمل حروف كبيرة لأكثر من حرف غير الحرف الأول',
        dates: 'تجنب التواريخ والسنوات المرتبطة بك.',
        l33t: 'تجنب بدائل الحروف التي يمكن التنبؤ بها مثل "a" ل "@" ',
        longerKeyboardPattern: 'أستخدم أنماط أكثر وقم بتغيير أتجاه الكتابة في لوحة المفاتيح عدة مرات',
        noNeed: 'يمكنك إنشاء كلمات مرور قوية دون استخدام الرموز أو الأرقام أو الأحرف الكبيرة.',
        pwned: 'إذا كنت تستخدم كلمة المرور هذه في مكان آخر ، فيجب عليك تغييرها.',
        recentYears: 'تجنب السنوات الأخيرة.',
        repeated: 'تجنب الكلمات والحروف المتكررة.',
        reverseWords: 'تجنب التهجئات العكسية للكلمات الشائعة.',
        sequences: 'تجنب تسلسل الأحرف الشائعة.',
        useWords: 'استخدم كلمات متعددة ، ولكن تجنب العبارات الشائعة.',
      },
      warnings: {
        common: 'كلمة السر هذه شائعة في الأستخدام',
        commonNames: 'من السهل تخمين الأسماء والألقاب الشائعة',
        dates: 'من السهل تخمين التواريخ',
        extendedRepeat: 'من السهل تخمين أنماط الحروف المتكررة مثل "abcabcabc"',
        keyPattern: 'من السهل تخمين أنماط لوحة المفاتيح الصغيرة',
        namesByThemselves: 'من السهل تخمين الأسم الأول أو اللقب',
        pwned: 'كلمة المرور الخاص بك تم أختراقها والكشف عنها في الأنترنت',
        recentYears: 'من السهل تخمين السنوات الحديثة',
        sequences: 'من السهل تخمين أنماط الحروف العامة أو الهجائية مثل "abc" ',
        similarToCommon: 'كلمة السر هذه مشابهة لكلمات السر الشائعة في الأستخدام',
        simpleRepeat: 'من السهل تخمين الحروف المكررة مثل "aaa"',
        straightRow: 'من السهل تخمين الحروف الموجودة على نفس السطر في لوحة المفاتيح',
        topHundred: 'كلمة السر هذه مستخدمة بشكل متكررة',
        topTen: 'كلمة السر هذه مستخدمة بكثرة',
        userInputs: 'يجب ألا يكون هناك أي بيانات شخصية أو بيانات ذات صلة بالصفحة.',
        wordByItself: 'من السهل تخميل الكلمات المنفردة',
      },
    },
  },
  userButton: {
    action__addAccount: 'إضافة حساب',
    action__manageAccount: 'إدارة الحساب',
    action__signOut: 'تسجيل الخروج',
    action__signOutAll: 'تسجيل الخروج من جميع الحسابات',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'تم النسخ',
      actionLabel__copy: 'نسخ الكل',
      actionLabel__download: 'تحميل ملف .txt',
      actionLabel__print: 'طباعة',
      infoText1: 'سيتم تفعيل رموز النسخ الأحتياطي لهذا الحساب',
      infoText2:
        'قم بتخزين الرموز في مكان آمن وحافظ على سريتها. يمكنك تجديد الرموز الأحتياطية اذا كنت تشك أن حسابك معرض للخطر',
      subtitle__codelist: 'قم بتخزين الرموز في مكان آمن وابقيها سرا.',
      successMessage:
        'رموز النسخ الأحتياطي مفعلة الآن. يمكنك أستعمال واحدة من هذه الرموز لتسجيل الدخول إلى حسابك, اذا فقدت الوصول إلى جهاز المصادقة الخاص بك. كل رمز يمكن أستعماله لمرة واحدة فقط.',
      successSubtitle:
        'يمكنك أستعمال واحدة من هذه الرموز لتسجيل الدخول إلى حسابك, اذا فقدت الوصول إلى جهاز المصادقة الخاص بك',
      title: 'إضافة التحقق عن طريق الرموز الأحتياطية',
      title__codelist: 'رموز النسخ الأحتياطي',
    },
    connectedAccountPage: {
      formHint: 'أختر موفر خدمة لتوصيل حسابك',
      formHint__noAccounts: 'لا يوجد موفرين خدمة لتوصيل حسابك',
      removeResource: {
        messageLine1: 'سيتم حذف هذا الموفر من حسابك {{identifier}}',
        messageLine2: 'لن تتمكن بعد الآن من استخدام هذا الحساب المتصل ولن تعمل أي ميزات تابعة.',
        successMessage: 'تم حذف هذا العنوان من حسابك {{connectedAccount}}',
        title: 'حذف الحساب المتصل',
      },
      socialButtonsBlockButton: 'إضافة الموفر {{provider|titleize}} لحسابك',
      successMessage: 'تمت إضافة موفر الخدمة الى حسابك',
      title: 'أضف حساب متصل',
    },
    deletePage: {
      actionDescription: 'أكتب حذف حساب بالأسفل للمتابعة',
      confirm: 'حذف حساب',
      messageLine1: 'هل أنت من انك تريد حذف هذا الحساب؟',
      messageLine2: 'هذا القرار نهائي ولا يمكن التراجع عنه.',
      title: 'حذف الحساب',
    },
    emailAddressPage: {
      emailCode: {
        formHint: 'سيتم إرسال بريد إلكتروني يحتوي على رمز التحقق لهذا البريد الإلكتروني',
        formSubtitle: 'أرسل رمز التحقق المرسل إلى {{identifier}}',
        formTitle: 'رمز التحقق',
        resendButton: 'لم يصلك الرمز؟ حاول مرة أخرى',
        successMessage: 'البريد الإلكتروني {{identifier}} تمت إضافته إلى حسابك',
      },
      emailLink: {
        formHint: 'سيتم إرسال بريد إلكتروني يحتوي على رمز التحقق لهذا البريد الإلكتروني',
        formSubtitle: 'أنقر على رابط التحقق المرسل إلى البريد الألكتروني {{identifier}}',
        formTitle: 'رابط التحقق',
        resendButton: 'لم يصلك الرابط؟ حاول مرة أخرى',
        successMessage: 'البريد الإلكتروني {{identifier}} تمت إضافته إلى حسابك',
      },
      removeResource: {
        messageLine1: 'سيتم حذف هذا الإيميل من حسابك {{identifier}}',
        messageLine2: 'لن تتمكن من تسجيل الدخول باستخدام عنوان البريد الإلكتروني هذا.',
        successMessage: 'تم حذف هذا العنوان من حسابك {{emailAddress}}',
        title: 'حذف عنوان البريد الإلكتروني هذا',
      },
      title: 'أضافة البريد الإلكتروني',
      verifyTitle: 'Verify email address',
    },
    formButtonPrimary__add: 'إضافة',
    formButtonPrimary__continue: 'متابعة',
    formButtonPrimary__finish: 'انهاء',
    formButtonPrimary__remove: 'إزالة',
    formButtonPrimary__save: 'حفظ',
    formButtonReset: 'الغاء',
    mfaPage: {
      formHint: 'أختر طريقة للأضافة',
      title: 'أضافة التحقق بخطوتين',
    },
    mfaPhoneCodePage: {
      backButton: 'إستخدم الرقم الموجود',
      primaryButton__addPhoneNumber: 'إضافة رقم جوال',
      removeResource: {
        messageLine1: 'لن يتم إستلام اي رموز تحقق على {{identifier}} عند تسجيل الدخول',
        messageLine2: 'قد لا يكون حسابك آمنا. هل أنك متأكد أنك تريد المتابعة؟',
        successMessage: 'تم إلغاء التحقق بخطوتين عن طريق الرسائل النصية لرقم الجوال هذا {{mfaPhoneCode}}',
        title: 'إزالة التحقق بخطوتين',
      },
      subtitle__availablePhoneNumbers: 'أختر رقم جوال لأضافة التحقق بخطوتين عن طريق الرسائل النصية',
      subtitle__unavailablePhoneNumbers: 'لا يوجد رقم جوال لأضافة التحقق بخطوتين عن طريق الرسائل النصية',
      successMessage1:
        'عند تسجيل الدخول، سوف تحتاج إلى إدخال رمز التحقق الذي تم إرساله إلى رقم الهاتف هذا كخطوة إضافية.',
      successMessage2:
        'احفظ هذه الرموز الاحتياطية وقم بتخزينها في مكان آمن." إذا فقدت إمكانية الوصول إلى جهاز المصادقة الخاص بك، فيمكنك استخدام الرموز الاحتياطية لتسجيل الدخول.',
      successTitle: 'تم تمكين التحقق من رمز الرسائل القصيرة',
      title: 'أضافة التحقق عن طريق رمز الرسائل النصية',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'مسح رمز الQR بدلا من ذلك',
        buttonUnableToScan__nonPrimary: 'لا يمكنك مسح رمز الQR?',
        infoText__ableToScan: 'قم بإعداد طريقة تسجيل دخول جديدة في تطبيق المصادقة و قم بمسح كود الQR لربطه بحسابك',
        infoText__unableToScan: 'قم بإعداد تسجيل دخول جديدة في تطبيق المصادقة وأدخل الرمز المقدم أدناه',
        inputLabel__unableToScan1:
          'تأكد من تفعيل كلمات المرور المستندة إلى الوقت أو الأستعمال الواحد, ثم أكمل ربط حسابك',
        inputLabel__unableToScan2:
          'بدلا من ذلك, إذا كان المصدق الخاص بك يدعم روابط المدعومة من طرق المستندة إلى الوقت أو الأستعمال الواحد, يمكنك نسخ الرابط كله',
      },
      removeResource: {
        messageLine1: 'رموز التحقق من برنامج المصادقة هذا ستكون غير ضروية عند تسجيل الدخول',
        messageLine2: 'قد لا يكون حسابك آمنا. هل أنك متأكد أنك تريد المتابعة؟',
        successMessage: 'تم أزالة طريقة التحقق بخطوتين من تطبيق المصادقة',
        title: 'إزالة التحقق بخطوتين',
      },
      successMessage:
        'تم تمكين التحقق بخطوتين اللآن. عند تسجيل الدخول سوف يطلب منك أدخال رمز التحقق من تطبيق المصادقة الخاص بك',
      title: 'إضافة تطبيق مصادقة',
      verifySubtitle: 'أدخل رمز التحقق المنشئ في تطبيق المصادقة',
      verifyTitle: 'رمز التحقق',
    },
    mobileButton__menu: 'القائمة',
    navbar: {
      account: 'الملف الشخصي',
      description: 'إدارة معلومات ملفك الشخصي.',
      security: 'حماية',
      title: 'الملف الشخصي',
    },
    passkeyScreen: {
      removeResource: {
        messageLine1: '{{name}} سوف يتم حذفه من هذا الحساب.',
        title: 'إزالة مفتاح المرور',
      },
      subtitle__rename: 'يمكنك تغيير اسم مفتاح المرور لتسهيل العثور عليه',
      title__rename: 'إعادة تسمية مفتاح المرور',
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'يوصى بتسجيل الخروج من جميع الأجهزة الأخرى التي ربما قد استخدمت كلمة المرور القديمة الخاصة بك.',
      readonly: 'لا يمكن تعديل كلمة المرور لأنه لا يمكنك تسجيل الدخول إلى عن طريق حساب المؤسسة',
      successMessage__set: 'تم تعيين كلمة السر.',
      successMessage__signOutOfOtherSessions: 'تم تسجيل الخروج من جميع الأجهزة.',
      successMessage__update: 'تم تحديث كلمة السر',
      title__set: 'تعيين كلمة المرور',
      title__update: 'تغيير كلمة المرور',
    },
    phoneNumberPage: {
      infoText: 'سيتم إرسال رسالة نصية تحتوي على رابط التحقق إلى رقم الهاتف هذا.',
      removeResource: {
        messageLine1: 'سيتم حذف هذا الإيميل من حسابك {{identifier}}',
        messageLine2: 'لن تتمكن من تسجيل الدخول بإستخدام رقم الجوال هذا',
        successMessage: 'تم حذف هذا العنوان من حسابك {{phoneNumber}}',
        title: 'حذف رقم الجوال',
      },
      successMessage: 'تم إضافة رقم الجوال هذا {{identifier}}',
      title: 'إضافة رقم جوال',
      verifySubtitle: 'أدخل رمز التحقق المرسل إلى {{identifier}}',
      verifyTitle: 'التحقق من رقم الهاتف',
    },
    profilePage: {
      fileDropAreaHint: 'أرفع صورة بصيغة JPG, PNG, GIF أو WEBP أقل من 10 ميغابايت',
      imageFormDestructiveActionSubtitle: 'حذف صورة الملف الشخصي',
      imageFormSubtitle: 'رفع صورة للملف الشخصي',
      imageFormTitle: 'صورة الملف الشخصي',
      readonly: 'تم توفير معلومات حسابك عن طريق حساب المؤسسة ولا يمكن تعديلها',
      successMessage: 'معلومات حسابك الشخصي تم تحديثها',
      title: 'تحديث الملف الشخصي',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'قم بتسجيل الخروج من الجهاز',
        title: 'الأجهزة النشطة',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'حاول مرة أخرى',
        actionLabel__reauthorize: 'أعطى الصلاحية الآن',
        destructiveActionTitle: 'حذف',
        primaryButton: 'ربط حساب',
        subtitle__disconnected: undefined,
        subtitle__reauthorize:
          'تم تحديث النطاقات المطلوبة. هذا التحديث قد يحد من العمليات الوظيفية. يرجى إعادة ترخيص هذا التطبيق لتجنب أي مشاكل',
        title: 'الحسابات المتصلة',
      },
      dangerSection: {
        deleteAccountButton: 'حذف الحساب',
        title: 'خطر',
      },
      emailAddressesSection: {
        destructiveAction: 'أحذف البريد الإلكتروني',
        detailsAction__nonPrimary: 'تعيين كبريد رئيسي',
        detailsAction__primary: 'التحقق الكامل',
        detailsAction__unverified: 'تحقق من البريد الإلكتروني',
        primaryButton: 'أضافة عنوان إلكتروني',
        title: 'العنوان الإلكتروني',
      },
      enterpriseAccountsSection: {
        title: 'حساب المؤسسات',
      },
      headerTitle__account: 'الحساب',
      headerTitle__security: 'الأمان',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'تجديد رموز النسخ الاحتياطي',
          headerTitle: 'رموز النسخ الاحتياطي',
          subtitle__regenerate:
            'احصل على مجموعة جديدة من رموز النسخ الاحتياطي الآمنة. سيتم حذف رموز النسخ الاحتياطي السابقة ولا يمكن استخدامها.',
          title__regenerate: 'تجديد رموز النسخ الاحتياطي',
        },
        phoneCode: {
          actionLabel__setDefault: 'تعيين كأفتراضي',
          destructiveActionLabel: 'حذف رقم الجوال',
        },
        primaryButton: 'إضافةالتحقق بخطوتين',
        title: 'التحقق بخطوتين',
        totp: {
          destructiveActionTitle: 'حذف',
          headerTitle: 'تطبيق المصادقة',
        },
      },
      passkeysSection: {
        menuAction__destructive: 'إزالة',
        menuAction__rename: 'إعادة تسمية',
        title: 'مفاتيح المرور',
      },
      passwordSection: {
        primaryButton__setPassword: 'تعيين كلمة المرور',
        primaryButton__updatePassword: 'تغيير كلمة المرور',
        title: 'كلمة المرور',
      },
      phoneNumbersSection: {
        destructiveAction: 'حذف رقم الجوال',
        detailsAction__nonPrimary: 'تعيين كرئيسي',
        detailsAction__primary: 'التحقق الكامل',
        detailsAction__unverified: 'تحقق من رقم الجوال',
        primaryButton: 'إضافة رقم جوال',
        title: 'رقم الجوال',
      },
      profileSection: {
        primaryButton: 'تحديث الملف الشخصي',
        title: 'الملف الشخصي',
      },
      usernameSection: {
        primaryButton__setUsername: 'تعيين اسم المستخدم',
        primaryButton__updateUsername: 'تغيير اسم المستخدم',
        title: 'اسم المستخدم',
      },
      web3WalletsSection: {
        destructiveAction: 'حذف المحفظة',
        primaryButton: 'محافظ Web3',
        title: 'محافظ Web3',
      },
    },
    usernamePage: {
      successMessage: 'تم تحديث اسم المستخدم',
      title__set: 'تحديث اسم المستخدم',
      title__update: 'تحديث اسم المستخدم',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: 'سيتم حذف هذه المحفظة من حسابك{{identifier}}',
        messageLine2: 'لن تتمكن من تسجيل الدخول إلى الحساب بإستخدام محفظة web3 هذه',
        successMessage: 'تم حذف هذه المحفظة من حسابك{{web3Wallet}}',
        title: 'حذف محفظة web3',
      },
      subtitle__availableWallets: 'أختر محفظة web3 لتوصيلها بحسابك',
      subtitle__unavailableWallets: 'لا توجد اي محفظة web3 متاحة',
      successMessage: 'تمت إضافة المحفظة الى حسابك.',
      title: 'إضافة محفظة web3',
      web3WalletButtonsBlockButton: undefined,
    },
  },
  waitlist: {
    start: {
      actionLink: undefined,
      actionText: undefined,
      formButton: undefined,
      subtitle: undefined,
      title: undefined,
    },
    success: {
      message: undefined,
      subtitle: undefined,
      title: undefined,
    },
  },
} as const;
