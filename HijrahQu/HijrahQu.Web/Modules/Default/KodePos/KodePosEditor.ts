
namespace HijrahQu.Default.Editor {

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class KodePosEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            var items = KodePosRow.getLookup().items;
            for (var i = 1; i <= items.length; i++) {
                // add option accepts a key (id) value and display text value
                this.addOption(items[i].Kodepos, items[i].KodeposLengkap);
            }
        }
    }

    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class ExpedisiEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery) {
            super(container, null);
            this.addOption("NINJA", "NINJA");
            this.addOption("JNE", "JNE");
            this.addOption("JX", "JX");
        }
    }
}