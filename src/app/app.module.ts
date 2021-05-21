import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

import {AppComponent} from './app.component';
import {AppCodeModule} from './app.code.component';
import {AppMainComponent} from './app.main.component';
import {AppConfigComponent} from './app.config.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {AppMenuComponent} from './app.menu.component';
import {AppMenuitemComponent} from './app.menuitem.component';
import {AppRightMenuComponent} from './app.right-menu.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';
import {WidgetsComponent} from './utilities/widgets.component';

import {CountryService} from './demo/service/countryservice';
import {EventService} from './demo/service/eventservice';
import {NodeService} from './demo/service/nodeservice';
import {MenuService} from './app.menu.service';
import {CustomerService} from './demo/service/customerservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';
import {IconService} from './demo/service/iconservice';
import { CommandeCreateComponent } from './view/admin/commandes/commande-create/commande-create.component';
import { CommandesComponent } from './view/admin/commandes/commandes.component';
import { CommandeListComponent } from './view/admin/commandes/commande-list/commande-list.component';
import { CommandeEditComponent } from './view/admin/commandes/commande-edit/commande-edit.component';
import { CommandeViewComponent } from './view/admin/commandes/commande-view/commande-view.component';
import { EntrepriseClientComponent } from './view/admin/component/entreprise-client/entreprise-client.component';
import { EntrepriseComponent } from './view/admin/component/entreprise-client/entreprise/entreprise.component';
import { ClientComponent } from './view/admin/component/entreprise-client/client/client.component';
import { EntrepriseCreateComponent } from './view/admin/component/entreprise-client/entreprise/entreprise-create/entreprise-create.component';
import { EntrepriseEditComponent } from './view/admin/component/entreprise-client/entreprise/entreprise-edit/entreprise-edit.component';
import { EntrepriseListComponent } from './view/admin/component/entreprise-client/entreprise/entreprise-list/entreprise-list.component';
import { EntrepriseViewComponent } from './view/admin/component/entreprise-client/entreprise/entreprise-view/entreprise-view.component';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ClientCreateComponent} from './view/admin/component/entreprise-client/client/client-create/client-create.component';
import { ClientListComponent } from './view/admin/component/entreprise-client/client/client-list/client-list.component';
import { ClientEditComponent } from './view/admin/component/entreprise-client/client/client-edit/client-edit.component';
import { ClientViewComponent } from './view/admin/component/entreprise-client/client/client-view/client-view.component';
import { GroupetacheTacheComponent } from './view/admin/component/groupetache-tache/groupetache-tache.component';
import { GroupeTacheComponent } from './view/admin/component/groupetache-tache/groupe-tache/groupe-tache.component';
import { TacheComponent } from './view/admin/component/groupetache-tache/tache/tache.component';
import { GroupeTacheCreateComponent } from './view/admin/component/groupetache-tache/groupe-tache/groupe-tache-create/groupe-tache-create.component';
import { GroupeTacheEditComponent } from './view/admin/component/groupetache-tache/groupe-tache/groupe-tache-edit/groupe-tache-edit.component';
import { GroupeTacheListComponent } from './view/admin/component/groupetache-tache/groupe-tache/groupe-tache-list/groupe-tache-list.component';
import { GroupeTacheViewComponent } from './view/admin/component/groupetache-tache/groupe-tache/groupe-tache-view/groupe-tache-view.component';
import { TacheCreateComponent } from './view/admin/component/groupetache-tache/tache/tache-create/tache-create.component';
import { TacheEditComponent } from './view/admin/component/groupetache-tache/tache/tache-edit/tache-edit.component';
import { TacheListComponent } from './view/admin/component/groupetache-tache/tache/tache-list/tache-list.component';
import { TacheViewComponent } from './view/admin/component/groupetache-tache/tache/tache-view/tache-view.component';
import { SearchBarGroupetacheComponent } from './view/admin/component/groupetache-tache/groupe-tache/search-bar-groupetache/search-bar-groupetache.component';
import { EquipeMembreEquipeComponent } from './view/admin/component/equipe-membre-equipe/equipe-membre-equipe.component';
import { EquipeComponent } from './view/admin/component/equipe-membre-equipe/equipe/equipe.component';
import { EquipeCreateComponent } from './view/admin/component/equipe-membre-equipe/equipe/equipe-create/equipe-create.component';
import { EquipeListComponent } from './view/admin/component/equipe-membre-equipe/equipe/equipe-list/equipe-list.component';
import { MembreEquipeListComponent } from './view/admin/component/equipe-membre-equipe/membre-equipe/membre-equipe-list/membre-equipe-list.component';
import { MembreEquipeEditComponent } from './view/admin/component/equipe-membre-equipe/membre-equipe/membre-equipe-edit/membre-equipe-edit.component';
import { MembreEquipeViewComponent } from './view/admin/component/equipe-membre-equipe/membre-equipe/membre-equipe-view/membre-equipe-view.component';
import {DemandeCongeComponent} from './view/admin/component/demande-conge/demande-conge.component';
import {DemandeCongeEditComponent} from './view/admin/component/demande-conge/demande-conge-edit/demande-conge-edit.component';
import {DemandeCongeCreateComponent} from './view/admin/component/demande-conge/demande-conge-create/demande-conge-create.component';
import {DemandeCongeListComponent} from './view/admin/component/demande-conge/demande-conge-list/demande-conge-list.component';
import {DemandeCongeViewComponent} from './view/admin/component/demande-conge/demande-conge-view/demande-conge-view.component';
import {StatistiquesClientComponent} from './view/admin/component/statistiques-client/statistiques-client.component';
import {StatistiquesProjetComponent} from './view/admin/component/statistiques-projet/statistiques-projet.component';
import {SearchBarComponent} from './view/admin/component/statistiques-client/search-bar/search-bar.component';
import { StatistiquesClientTableComponent } from './view/admin/component/statistiques-client/statistiques-client-table/statistiques-client-table.component';
import {EquipeEditComponent} from "./view/admin/component/equipe-membre-equipe/equipe/equipe-edit/equipe-edit.component";
import {EquipeViewComponent} from "./view/admin/component/equipe-membre-equipe/equipe/equipe-view/equipe-view.component";
import {MembreEquipeComponent} from "./view/admin/component/equipe-membre-equipe/membre-equipe/membre-equipe.component";
import {MembreEquipeCreateComponent} from "./view/admin/component/equipe-membre-equipe/membre-equipe/membre-equipe-create/membre-equipe-create.component";
import {CriteresRechercheTacheComponent} from "./view/admin/component/criteres-recherche-tache/criteres-recherche-tache.component";
import {StatistiquesSuiviCollaborateurComponent} from "./view/admin/component/statistiques-suivi-collaborateur/statistiques-suivi-collaborateur.component";
import {CriteresDeRechercheComponent} from "./view/admin/component/statistiques-suivi-collaborateur/criteres-de-recherche/criteres-de-recherche.component";
import {ListeTachesComponent} from "./view/admin/component/criteres-recherche-tache/liste-taches/liste-taches.component";
import {CollaborateurDonneesComponent} from "./view/admin/component/statistiques-suivi-collaborateur/collaborateur-donnees/collaborateur-donnees.component";
import { FacturesComponent } from './view/admin/component/factures/factures.component';
import { FactureCreateComponent } from './view/admin/component/factures/facture-create/facture-create.component';
import { FactureListeComponent } from './view/admin/component/factures/facture-liste/facture-liste.component';
import { FactureViewComponent } from './view/admin/component/factures/facture-view/facture-view.component';
import { SearchBarFactureComponent } from './view/admin/component/factures/search-bar-facture/search-bar-facture.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AppCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppConfigComponent,
        AppRightMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,
        DashboardDemoComponent,
        FormLayoutDemoComponent,
        FloatLabelDemoComponent,
        InvalidStateDemoComponent,
        InputDemoComponent,
        ButtonDemoComponent,
        TableDemoComponent,
        ListDemoComponent,
        TreeDemoComponent,
        PanelsDemoComponent,
        OverlaysDemoComponent,
        MediaDemoComponent,
        MenusDemoComponent,
        MessagesDemoComponent,
        MessagesDemoComponent,
        MiscDemoComponent,
        ChartsDemoComponent,
        EmptyDemoComponent,
        FileDemoComponent,
        DocumentationComponent,
        DisplayComponent,
        ElevationComponent,
        FlexboxComponent,
        GridComponent,
        IconsComponent,
        SpacingComponent,
        TypographyComponent,
        TextComponent,
        AppCrudComponent,
        AppCalendarComponent,
        AppTimelineDemoComponent,
        WidgetsComponent,
        AppNotfoundComponent,
        AppErrorComponent,
        AppAccessdeniedComponent,
        AppLoginComponent,
        CommandeCreateComponent,
        CommandesComponent,
        CommandeListComponent,
        CommandeEditComponent,
        CommandeViewComponent,
        EntrepriseClientComponent,
        EntrepriseComponent,
        ClientComponent,
        EntrepriseCreateComponent,
        EntrepriseEditComponent,
        EntrepriseListComponent,
        EntrepriseViewComponent,
        ClientCreateComponent,
        ClientListComponent,
        ClientEditComponent,
        ClientViewComponent,
        GroupetacheTacheComponent,
        GroupeTacheComponent,
        TacheComponent,
        GroupeTacheCreateComponent,
        GroupeTacheEditComponent,
        GroupeTacheListComponent,
        GroupeTacheViewComponent,
        TacheCreateComponent,
        TacheEditComponent,
        TacheListComponent,
        TacheViewComponent,
        SearchBarGroupetacheComponent,
        EquipeMembreEquipeComponent,
        EquipeComponent,
        EquipeCreateComponent,
        EquipeListComponent,
        EquipeEditComponent,
        EquipeViewComponent,
        MembreEquipeComponent,
        MembreEquipeCreateComponent,
        MembreEquipeListComponent,
        MembreEquipeEditComponent,
        MembreEquipeViewComponent,
        DemandeCongeComponent,
        DemandeCongeEditComponent,
        DemandeCongeCreateComponent,
        DemandeCongeListComponent,
        DemandeCongeViewComponent,
        MembreEquipeViewComponent,
        StatistiquesProjetComponent,
        StatistiquesClientComponent,
        SearchBarComponent,
        StatistiquesClientTableComponent,
        CriteresRechercheTacheComponent,
        SearchBarComponent,
        ListeTachesComponent,
        StatistiquesSuiviCollaborateurComponent,
        CriteresDeRechercheComponent,
        CollaborateurDonneesComponent,
        SearchBarComponent,
        FacturesComponent,
        FactureCreateComponent,
        FactureListeComponent,
        FactureViewComponent,
        SearchBarFactureComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MenuService, MessageService, ConfirmationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
