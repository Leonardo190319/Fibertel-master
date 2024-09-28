import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './store/category/category.component';
import { BrandComponent } from './store/brand/brand.component';
import { DetailsComponent } from './store/details/details.component';
import { HomeComponent } from './store/home/home.component';
import { CartComponent } from './store/cart/cart.component';
import { ConsultationComponent } from './store/consultation/consultation.component';
import { CustomerComponent } from './buy/customer/customer.component';
import { LocationComponent } from './buy/location/location.component';
import { VoucherComponent } from './buy/voucher/voucher.component';
import { PaymentComponent } from './buy/payment/payment.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';
import { RestoreComponent } from './access/restore/restore.component';
import { ResetPasswordComponent } from './access/reset-password/reset-password.component';
import { FacitiesComponent } from './services/facities/facities.component';
import { MaintenanceComponent } from './services/maintenance/maintenance.component';
import { AbountComponent } from './services/abount/abount.component';
import { CiteComponent } from './services/cite/cite.component';
import { DashboardComponent } from './admi-panel/dashboard/dashboard.component';
import { CollaboratorsComponent } from './admi-panel/collaborators/collaborators.component';
import { ProductsComponent } from './admi-panel/products/products.component';
import { CreateProductComponent } from './admi-panel/create-product/create-product.component';
import { UpdateProductComponent } from './admi-panel/update-product/update-product.component';
import { CategoriesBrandsComponent } from './admi-panel/categories-brands/categories-brands.component';
import { CreateCategoryComponent } from './admi-panel/create-category/create-category.component';
import { CreateBrandComponent } from './admi-panel/create-brand/create-brand.component';
import { UpdateCategoryComponent } from './admi-panel/update-category/update-category.component';
import { UpdateBrandComponent } from './admi-panel/update-brand/update-brand.component';
import { OrdersComponent } from './admi-panel/orders/orders.component';
import { OrderComponent } from './admi-panel/order/order.component';
import { YouPickUpComponent } from './admi-panel/you-pick-up/you-pick-up.component';
import { IPickUpComponent } from './admi-panel/i-pick-up/i-pick-up.component';
import { ShippingComponent } from './admi-panel/shipping/shipping.component';
import { ShipmentComponent } from './admi-panel/shipment/shipment.component';
import { InvoicesComponent } from './admi-panel/invoices/invoices.component';
import { TicketsComponent } from './admi-panel/tickets/tickets.component';
import { QuotesComponent } from './admi-panel/quotes/quotes.component';
import { SuppliersComponent } from './admi-panel/suppliers/suppliers.component';
import { CreateSupplierComponent } from './admi-panel/create-supplier/create-supplier.component';
import { BannersComponent } from './admi-panel/banners/banners.component';
import { CreateBannerComponent } from './admi-panel/create-banner/create-banner.component';
import { UpdateBannerComponent } from './admi-panel/update-banner/update-banner.component';
import { ProfileComponent } from './admi-panel/profile/profile.component';
import { UpdateProfileComponent } from './admi-panel/update-profile/update-profile.component';
import { UpdateSupplierComponent } from './admi-panel/update-supplier/update-supplier.component';

export const routes: Routes = [
    
    // ------- STORE ---------
    {path: '', component: HomeComponent}, //PRINCIPAL
    {path: 'category/:id', component: CategoryComponent}, //PRODUCTOS POR CATEGORIA
    {path: 'brand/:id', component: BrandComponent}, //PRODUCTOS POR MARCA
    {path: 'cart', component: CartComponent}, //CARRITO DE COMPRAS
    {path: 'product/:id', component: DetailsComponent}, //DETALLES DEL PRODUCTO
    {path: 'consultation', component: ConsultationComponent}, //RASTREO DEL PEDIDO

    // ------ BUY ----------
    {path: 'buy/customer', component: CustomerComponent}, //FORMULARIO DE CLIENTE
    {path: 'buy/location', component: LocationComponent}, //FORMULARIO DE ENVIO 0 RECOJO
    {path: 'buy/voucher', component: VoucherComponent}, //FORMULARIO DE DATOS PARA COMPROBANTE
    {path: 'buy/payment', component: PaymentComponent}, //INTEGRACION DE PASARELA DE PAGO

    // ------ ACCESS --------
    {path: 'access/login', component: LoginComponent}, //LOGIN DE ADMINISTRADOR
    {path: 'access/register', component: RegisterComponent}, //REGISTRO DE ADMINISTRADOR
    {path: 'access/restore', component: RestoreComponent}, //FORMULARIO DE INGRESO DE CORREO
    {path: 'access/reset-password', component: ResetPasswordComponent}, //CAMBIO DE CONTRASEÑA
    
    // ------ SERVICES --------
    {path: 'services/facities', component: FacitiesComponent}, //VISTA DE INSTALACIONES
    {path: 'services/maintenance', component: MaintenanceComponent}, //VISTA DE MANTENIMIENTOS
    {path: 'services/abount', component: AbountComponent}, //VISTA DE NOSOTROS
    {path: 'services/cite', component: CiteComponent}, //VISTA DE FORMULARIO PRINCIAPL DE COTIZACION

    // ------- ADMI-PANEL --------
    {path: 'admi/dashboard', component: DashboardComponent}, //DASHBOARD
    {path: 'admi/collaborators', component: CollaboratorsComponent}, //COLABORADORES
    {path: 'admi/products', component: ProductsComponent}, //LISTA DE PRODUCTOS
    {path: 'admi/product/create', component: CreateProductComponent}, //FORMULARIO PARA CREAR NUEVO PRODUCTO
    {path: 'admi/product/:id/update', component: UpdateProductComponent}, //EDITAR / ACTUALIZAR DATOS DE PRODUCTO
    {path: 'admi/categories-brands', component: CategoriesBrandsComponent}, //LISTA DE CATEGORIAS Y MARCAS
    {path: 'admi/category/create', component: CreateCategoryComponent}, //FORMULARIO PARA CREAR NUEVA CATEGORIA
    {path: 'admi/brand/create', component: CreateBrandComponent}, //CREAR NUEVA MARCA
    {path: 'admi/category/:id/update', component: UpdateCategoryComponent}, //EDITAR O ACTUALIZAR CATEGORIA
    {path: 'admi/brand/:id/update', component: UpdateBrandComponent}, //EDIATR O ACTUALIZAR MARCA
    {path: 'admi/orders', component: OrdersComponent}, //LISTA DE ORDENES O PEDIDOS
    {path: 'admi/order/:id', component: OrderComponent}, //EDITAR ORDEN POR ID
    {path: 'admi/you-pick-up', component: YouPickUpComponent}, //LISTA DE PEDIDO - RECOJO
    {path: 'admi/i-pick-up/:id', component: IPickUpComponent}, //EDITAR O ACTUALIZAR RECOJO 
    {path: 'admi/shipping', component: ShippingComponent}, //LISTA DE PEDIDO - ENVIO
    {path: 'admi/shipment/:id', component: ShipmentComponent}, //EDITAR O ACTUALIZAR ENVIO
    {path: 'admi/invoices', component: InvoicesComponent}, //LISTA DE FACTURAS - COMPROBANTE
    {path: 'admi/tickets', component: TicketsComponent}, //LISTA DE BOLETAS - COMPROBANTE
    {path: 'admi/quotes', component: QuotesComponent}, //LISTA DE COTIZACIONES
    {path: 'admi/supliers', component: SuppliersComponent}, //LISTA DE PROVEEDORES
    {path: 'admi/suplier/:id/update', component: UpdateSupplierComponent}, //EDITAR DATOS DE PROVEEDOR
    {path: 'admi/suplier/create', component: CreateSupplierComponent}, //CREAR NUEVO PROVEEDOR
    {path: 'admi/banners', component: BannersComponent}, //LISTA DE BANNERS DE OFERTA
    {path: 'admi/banner/create', component: CreateBannerComponent}, //CREAR BANNER NUEVO
    {path: 'admi/banner/:id/update', component: UpdateBannerComponent}, //EDITAR BANNER DE OFERTA
    {path: 'admi/profile', component: ProfileComponent}, //PERFIL DE ADMINISTRADOR
    {path: 'admi/profile/:id/update', component: UpdateProfileComponent}, //EDITAR O ACTUALIZAR DATOS DE ADMINISTRADOR
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

 }