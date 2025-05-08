import { Routes } from '@angular/router';
import { DashboardComponent } from './PresentationLayer/Components/DashboardComponents/dashboard/dashboard.component';
import { HomeComponent } from './PresentationLayer/Components/SiteComponents/home/home.component';
import { CompanyIndexComponent } from './PresentationLayer/Components/DashboardComponents/CompanyWork/company-index/company-index.component';
import { AddCompanyComponent } from './PresentationLayer/Components/DashboardComponents/CompanyWork/add-company/add-company.component';
import { EditCompanyDataComponent } from './PresentationLayer/Components/DashboardComponents/CompanyWork/edit-company-data/edit-company-data.component';
import { notAddMoreThanCompanyGuard } from './Core/Guards/NotMoreThanOneCompany/not-add-more-than-company.guard';
import { ServicesIndexComponent } from './PresentationLayer/Components/DashboardComponents/ServicesOpreations/services-index/services-index.component';
import { AddServiceComponent } from './PresentationLayer/Components/DashboardComponents/ServicesOpreations/add-service/add-service.component';
import { EditServiceComponent } from './PresentationLayer/Components/DashboardComponents/ServicesOpreations/edit-service/edit-service.component';
import { CategoryIndexComponent } from './PresentationLayer/Components/DashboardComponents/CategoryOpreations/category-index/category-index.component';
import { ProductIndexComponent } from './PresentationLayer/Components/DashboardComponents/ProductOpreations/product-index/product-index.component';
import { AddProductComponent } from './PresentationLayer/Components/DashboardComponents/ProductOpreations/add-product/add-product.component';
import { EditProductComponent } from './PresentationLayer/Components/DashboardComponents/ProductOpreations/edit-product/edit-product.component';
import { UsersMessagesIndexComponent } from './PresentationLayer/Components/DashboardComponents/UsersMessagesOpreations/users-messages-index/users-messages-index.component';
import { UserMessageEditComponent } from './PresentationLayer/Components/DashboardComponents/UsersMessagesOpreations/user-message-edit/user-message-edit.component';
import { ClientOrderIndexComponent } from './PresentationLayer/Components/DashboardComponents/ClientOrderOpreations/client-order-index/client-order-index.component';
import { ClientOrderEditComponent } from './PresentationLayer/Components/DashboardComponents/ClientOrderOpreations/client-order-edit/client-order-edit.component';
import { QuestionIndexComponent } from './PresentationLayer/Components/DashboardComponents/QuestionsOpreations/question-index/question-index.component';
import { AddQuestionComponent } from './PresentationLayer/Components/DashboardComponents/QuestionsOpreations/add-question/add-question.component';
import { EditQuestionComponent } from './PresentationLayer/Components/DashboardComponents/QuestionsOpreations/edit-question/edit-question.component';
import { ProductsPageComponent } from './PresentationLayer/Components/SiteComponents/products-page/products-page.component';
import { ProductDetalisComponent } from './PresentationLayer/Components/SiteComponents/product-detalis/product-detalis.component';
import { ContactUsPageComponent } from './PresentationLayer/Components/SiteComponents/contact-us-page/contact-us-page.component';
import { LoginComponent } from './PresentationLayer/Components/SiteComponents/login/login.component';
import { isHeAuthantictedGuard } from './Core/Guards/IfHeAuthanticated/is-he-authanticted.guard';

export const routes: Routes = [
  {
    path: 'Dashboard',
    canActivate: [isHeAuthantictedGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'CompanyIndex' },

      { path: 'CompanyIndex', component: CompanyIndexComponent },

      { path: 'EditCompanyData/:id', component: EditCompanyDataComponent },

      {
        path: 'AddCompany',
        component: AddCompanyComponent,
        canActivate: [notAddMoreThanCompanyGuard],
      },

      { path: 'ServicesIndex', component: ServicesIndexComponent },

      { path: 'AddService', component: AddServiceComponent },

      { path: 'EditService/:id', component: EditServiceComponent },

      { path: 'CategoryIndex', component: CategoryIndexComponent },

      { path: 'ProductIndex', component: ProductIndexComponent },

      { path: 'AddProduct', component: AddProductComponent },

      { path: 'EditProduct/:id', component: EditProductComponent },

      { path: 'UsersMessagesIndex', component: UsersMessagesIndexComponent },

      { path: 'EditUserMessage/:id', component: UserMessageEditComponent },

      { path: 'ClientOrdersIndex', component: ClientOrderIndexComponent },

      { path: 'EditClientOrder/:id', component: ClientOrderEditComponent },

      { path: 'QuestionsIndex', component: QuestionIndexComponent },
      { path: 'AddQuestion', component: AddQuestionComponent },
      { path: 'EditQuestion/:id', component: EditQuestionComponent },

      { path: '**', pathMatch: 'full', redirectTo: 'CompanyIndex' },
    ],
  },
  { path: 'Home', component: HomeComponent },
  { path: 'ProductsPage', component: ProductsPageComponent },
  { path: 'ProductDetalis/:id', component: ProductDetalisComponent },
  { path: 'contactPage', component: ContactUsPageComponent },
  { path: 'Login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];
