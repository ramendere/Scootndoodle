import React from 'react'
import Container from 'react-bootstrap/Container'
import './PaymentTest.css'
//import { PayPalButton } from 'react-paypal-button-v2';
import StripeCheckout from 'react-stripe-checkout';


// const CLIENT = {
//     sandbox: 'AUm1Ey3myi5PKQFlWRUmJTzRrMN1KrD45lOLYoyAxdn-5A8cKaIr8XhzYkVx9C8QJFxsJNAqqJ0sRKXs',
//     production: 'xxxxxxxxx',
// };
let total = 995;

class CartView extends React.Component {
    onToken = (token, addresses) => {
        alert("Payment is Successful! Thank You!");
    };
    render() {

        return(
            <Container className = 'container'>
                <div>
                    <nav className='navBar'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href={"/Home"}>Home</a></li>
                            <li className="breadcrumb-item "><a href={"/ShopPreview"}>Shop</a></li>
                            <li className="breadcrumb-item active"><a href="#">Cart</a></li>
                        </ol>
                    </nav>
                    <h1 className='color'>
                        Your Cart
                    </h1>
                    <hr/>

                    <table className="table table-sm">

                        <tbody>
                        <tr>

                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td scope="row">Hippo</td>
                            <td>Green</td>
                            <td>Medium</td>
                            <td>1</td>
                            <td>9.95</td>
                        </tr>


                        </tbody>
                    </table>
                    {/* <PayPalButton
                        amount={total}
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);
                            this.props.history.push('/Success');
                            // OPTIONAL: Call your server to save the transaction
                            return this.ppBtn.orderId = data.orderID;
                        }}
                        //USE FOR PRODUCTION (Right now its in test)
                        options={{
                            clientId: "AUm1Ey3myi5PKQFlWRUmJTzRrMN1KrD45lOLYoyAxdn-5A8cKaIr8XhzYkVx9C8QJFxsJNAqqJ0sRKXs"
                        }}
                    /> */}
                    <StripeCheckout className={"center"}
                       amount={total}
                       billingAddress
                        description="DexteDoodle Therapeutic Tool"
                        locale="auto"
                        name="DexteDoode.com"
                        stripeKey="pk_test_1tLXq8tyKXWxDrUC1dJtkLVE00DaMRX9Ur"
                        token={this.onToken}
                       zipCode
                    />
                    <hr/>
                </div>
            </Container>
        );
    };
}
export default CartView;

