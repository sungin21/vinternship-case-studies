// ======================
// Payment Gateway Interface
// ======================

interface PaymentGateway {

    processPayment(
        amount: number
    ): Promise<boolean>;
}


// ======================
// Stripe Gateway
// ======================

class StripeGateway
implements PaymentGateway {

    async processPayment(
        amount: number
    ): Promise<boolean> {

        console.log(
            `Processing payment of $${amount} via Stripe.`
        );

        return true;
    }
}


// ======================
// PayPal Gateway
// ======================

class PaypalGateway
implements PaymentGateway {

    async processPayment(
        amount: number
    ): Promise<boolean> {

        console.log(
            `Processing payment of $${amount} via PayPal.`
        );

        return true;
    }
}


// ======================
// Bank Transfer Gateway
// ======================

class BankTransferGateway
implements PaymentGateway {

    async processPayment(
        amount: number
    ): Promise<boolean> {

        console.log(
            `Processing payment of $${amount} via Bank Transfer.`
        );

        return true;
    }
}


// ======================
// Mock Gateway Success
// ======================

class MockGateway
implements PaymentGateway {

    async processPayment(
        amount: number
    ): Promise<boolean> {

        console.log(
            `Mock processing payment of $${amount}.`
        );

        return true;
    }
}


// ======================
// Mock Gateway Failure
// ======================

class FailedMockGateway
implements PaymentGateway {

    async processPayment(
        amount: number
    ): Promise<boolean> {

        console.log(
            `Mock failed payment of $${amount}.`
        );

        return false;
    }
}


// ======================
// Payment Processor
// ======================

class PaymentProcessor {

    constructor(
        private gateway:
        PaymentGateway
    ) {}

    async pay(
        amount: number
    ): Promise<void> {

        const success =
            await this.gateway.processPayment(
                amount
            );

        if (success) {

            console.log(
                "Payment successful!"
            );

        } else {

            console.log(
                "Payment failed."
            );
        }
    }
}


// ======================
// Using Stripe Gateway
// ======================

const stripeGateway =
    new StripeGateway();

const processor1 =
    new PaymentProcessor(
        stripeGateway
    );

processor1.pay(100);


// ======================
// Using PayPal Gateway
// ======================

const paypalGateway =
    new PaypalGateway();

const processor2 =
    new PaymentProcessor(
        paypalGateway
    );

processor2.pay(200);


// ======================
// Using Bank Transfer Gateway
// ======================

const bankGateway =
    new BankTransferGateway();

const processor3 =
    new PaymentProcessor(
        bankGateway
    );

processor3.pay(300);


// ======================
// Using Mock Gateway
// ======================

const mockGateway =
    new MockGateway();

const testProcessor =
    new PaymentProcessor(
        mockGateway
    );

testProcessor.pay(50);


// ======================
// Using Failed Mock Gateway
// ======================

const failedGateway =
    new FailedMockGateway();

const failedProcessor =
    new PaymentProcessor(
        failedGateway
    );

failedProcessor.pay(75);