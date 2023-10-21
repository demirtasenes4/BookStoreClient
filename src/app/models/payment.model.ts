import { BookModel } from "./book.model"

export class PaymentModel {
    books: BookModel[] = []
    buyer: BuyerModel = new BuyerModel();
    shippingAddress: AddressModel = new AddressModel();
    billingAddress: AddressModel = new AddressModel();
    paymentCard: PaymentCardModel = new PaymentCardModel();
}

export class BuyerModel {
    id: string = "";
    name: string = "Enes";
    surname: string = "Demirtas";
    identityNumber: string = "11111111111";
    email: string = "demirtasenes2@gmail.com";
    gsmNumber: string = "5546548006";
    registrationDate: string = "";
    lastLoginDate: string = "";
    registrationAddress: string = "";
    city: string = "";
    country: string = "";
    zipCode: string = "";
    ip: string = "";
}

export class AddressModel {
    description: string = "Istanbul";
    zipCode: string = "34734";
    contactName: string = "Enes Demirtas";
    city: string = "Istanbul";
    country: string = "Türkiye";
}

export class PaymentCardModel {
    cardHolderName: string = "ENES DEMIRTAS  ";
    cardNumber: string = "";
    expireYear: string = "";
    expireMonth: string = "";
    cvc: string = "390";
}