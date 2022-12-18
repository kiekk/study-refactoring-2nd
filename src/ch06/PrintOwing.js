export function printOwing(invoice, console, clock) {
    printBanner();

    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    recordDueDate(invoice, clock);

    printDetails(invoice, outstanding);

    function printBanner() {
        console.log("***********************");
        console.log("**** Customer Owes ****");
        console.log("***********************");
    }

    function printDetails(invoice, outstanding) {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
        console.log(`due: ${invoice.dueDate.toLocaleDateString("en-US")}`);
    }

    function recordDueDate(invoice, clock) {
        const today = clock.today;
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    }

}