/**side nave html string
 * @param page=> page name to display 
 * @param search => to avoid search input
 * @returns side nav html string
 */
export const sideNavBar = (page: string, search?: boolean, icon?: string) =>
    `<div class="body-wrapper">
<!-- partial:partials/_sidebar.html -->
<aside class="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">

 <div class="mdc-drawer__content">
     <div class="user-info">
         <p class="email" id='company'></p>
     </div>
     <div class="mdc-card premium-card">
         <div class="d-flex align-items-center">
             <img src="logo/favicon.png" width="60"
                 class="circle responsive-img mt-0 mb-1 ml-2 font-weight-bold tx-12" />
             <div>
                 <img src="" id='compLogo' width="60"
                     class="circle responsive-img mt-0 mb-1 ml-2 font-weight-bold tx-12" />

             </div>
         </div>
         <p class="tx-8 mt-3 mb-1">This page acces only by webook admin.</p>
         <span class="mdc-button mdc-button--raised mdc-button--white">Webook Admin</span>
     </div>
     <div class="mdc-list-group">
         <nav class="mdc-list mdc-drawer-menu">
             <div class="mdc-list-item mdc-drawer-item">
                 <a class="mdc-drawer-link" href="/">
                     <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                         aria-hidden="true">contact_mail</i>
                     contact
                 </a>
             </div>
             <div class="mdc-list-item mdc-drawer-item">
                 <a class="mdc-drawer-link" href="message.html">
                     <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                         aria-hidden="true">mail</i>
                     Messages
                 </a>
             </div>
             <div class="mdc-list-item mdc-drawer-item">
                 <a class="mdc-drawer-link" href="letter.html">
                     <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                         aria-hidden="true">email</i>
                     Letters
                 </a>
             </div>
             <div class="mdc-list-item mdc-drawer-item">
                 <a class="mdc-drawer-link" href="report.html">
                     <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                         aria-hidden="true">summarize</i>
                     Reports
                 </a>
             </div>
             <div class="mdc-list-item mdc-drawer-item">
             <a class="mdc-drawer-link" href="memo.html">
                 <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon"
                     aria-hidden="true"description</i>
                 Memo
             </a>
         </div>
         </nav>
     </div>
     <div class="profile-actions">
         <a href="javascript:;">Settings</a>
         <span class="divider"></span>
         <a href="javascript:;">Logout</a>
     </div>

 </div>
</aside>
<!-- partial -->
<div class="main-wrapper mdc-drawer-app-content">
 <!-- partial:partials/_navbar.html -->
 <header class="mdc-top-app-bar">
     <div class="mdc-top-app-bar__row">
         <div class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
             <button
                 class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button sidebar-toggler">menu</button>
             <span class="mdc-top-app-bar__title">
                 <i class="material-icons">${icon}</i>
                 ${page}
             </span>
             ${!search ?
        `<div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon search-text-field d-none d-md-flex">
                 <i class="material-icons mdc-text-field__icon">search</i>
                 <input class="mdc-text-field__input" id="search">
                 <div class="mdc-notched-outline">
                     <div class="mdc-notched-outline__leading"></div>
                     <div class="mdc-notched-outline__notch">
                         <label for="text-field-hero-input" class="mdc-floating-label">Search..</label>
                     </div>
                     <div class="mdc-notched-outline__trailing"></div>
                 </div>
             </div>`: `<p> </p>`}
         </div>

         <div
             class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end mdc-top-app-bar__section-right">
             <div class="menu-button-container menu-profile d-none d-md-block">

                 <button class="mdc-button mdc-menu-button">
                     <span class="d-flex align-items-center">
                         <span class="figure">
                             <img src="" class="user" id="userPhoto">
                         </span>
                         <span class="user-name">webook admin</span>
                     </span>
                 </button>
                 <div class="mdc-menu mdc-menu-surface" tabindex="-1">
                     <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                         <li class="mdc-list-item" role="menuitem">
                             <div class="item-thumbnail item-thumbnail-icon-only">
                                 <i class="mdi mdi-account-edit-outline text-primary"></i>
                             </div>
                             <div
                                 class="item-content d-flex align-items-start flex-column justify-content-center">
                                 <h6 class="item-subject font-weight-normal">Edit profile</h6>
                             </div>
                         </li>
                         <li class="mdc-list-item" role="menuitem">
                             <div class="item-thumbnail item-thumbnail-icon-only">
                                 <i class="mdi mdi-settings-outline text-primary"></i>
                             </div>
                             <div   id="logout"
                                 class="item-content d-flex align-items-start flex-column justify-content-center">
                                 <h6 class="item-subject font-weight-normal">Logout</h6>
                             </div>
                         </li>
                     </ul>
                 </div>
             </div>
             <div class="divider d-none d-md-block"></div>
             <div class="menu-button-container d-none d-md-block">
                 <button class="mdc-button mdc-menu-button">
                     <i class="mdi mdi-settings"></i>
                 </button>
                 <div class="mdc-menu mdc-menu-surface" tabindex="-1">
                     <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                         <li class="mdc-list-item" role="menuitem">
                             <div class="item-thumbnail item-thumbnail-icon-only">
                                 <i class="mdi mdi-alert-circle-outline text-primary"></i>
                             </div>
                             <div
                                 class="item-content d-flex align-items-start flex-column justify-content-center">
                                 <h6 class="item-subject font-weight-normal">Settings</h6>
                             </div>
                         </li>
                         <li class="mdc-list-item" role="menuitem">
                             <div class="item-thumbnail item-thumbnail-icon-only">
                                 <i class="mdi mdi-progress-download text-primary"></i>
                             </div>

                         </li>
                     </ul>
                 </div>
             </div>



         </div>
     </div>
 </header>
 <!-- Main body -->
 <div class="wrapper" id="main">
   
 </div>

 <!-- partial -->
</div>
</div>`