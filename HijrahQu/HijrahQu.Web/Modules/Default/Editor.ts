namespace HijrahQu.Default {
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class StatusEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            // add option accepts a key (id) value and display text value
            this.addOption("NewOrder", "New Order");
            this.addOption("Printed", "Printed");
            this.addOption("Delivery", "Delivery");
            this.addOption("Received", "Received");
            this.addOption("Complete", "Complete");
            this.addOption("Close", "Close");

        }
    }

   

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class CaraBayarEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            // add option accepts a key (id) value and display text value
            this.addOption("Cash On Delivery", "Cash On Delivery");
            this.addOption("TRANSFER", "TRANSFER");
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class ExpedisiEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            // add option accepts a key (id) value and display text value
            this.addOption("NINJA", "NINJA");
            this.addOption("JNE", "JNE");
            this.addOption("JNT", "JNT");
            this.addOption("SICEPAT", "SICEPAT");
            this.addOption("TIKI", "TIKI");

        }
    }

}