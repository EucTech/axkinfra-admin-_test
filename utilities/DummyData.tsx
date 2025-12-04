
interface ShipmentDataType {
    trackingId: string;
    sender: string;
    receiver: string;
    pickUp: string;
    deliveryTo: string;
    amount: string;
    deliveryStatus: string;
    paymentStatus: string;
    processingTime: string;
}

export const ShipmentData: ShipmentDataType[] = [
    {
        trackingId: "MAF-100-234-291",
        sender: "Mugisha Sharif",
        receiver: "Mercy",
        pickUp: "Kigali, Rwanda",
        deliveryTo: "Musanze, Rwanda",
        amount: "2,000",
        deliveryStatus: "In-Transit",
        paymentStatus: "Paid",
        processingTime: "5",
    },
    {
        trackingId: "MAF-100-234-292",
        sender: "Joseph Rukundo",
        receiver: "Etienne",
        pickUp: "Kigali, Rwanda",
        deliveryTo: "Musanze, Rwanda",
        amount: "3,500",
        deliveryStatus: "Delayed",
        paymentStatus: "Pending",
        processingTime: "3",
    },
    {
        trackingId: "MAF-100-234-293",
        sender: "Esther Ngabo",
        receiver: "Bob Brown",
        pickUp: "Kigali, Rwanda",
        deliveryTo: "Musanze, Rwanda",
        amount: "1,500",
        deliveryStatus: "In-Transit",
        paymentStatus: "Paid",
        processingTime: "4",
    },
    {
        trackingId: "MAF-100-234-294",
        sender: "Paul Kimani",
        receiver: "Eve White",
        pickUp: "Bugasera, Rwanda",
        deliveryTo: "Musanze, Rwanda",
        amount: "2,800",
        deliveryStatus: "Pending",
        paymentStatus: "Paid",
        processingTime: "6",
    },
    {
        trackingId: "MAF-100-234-295",
        sender: "David Wilson",
        receiver: "Grace Green",
        pickUp: "Kigali, Rwanda",
        deliveryTo: "Butare, Rwanda",
        amount: "4,000",
        deliveryStatus: "Delivered",
        paymentStatus: "Pending",
        processingTime: "2",
    },
]