namespace HijrahQu.Default {

    @Serenity.Decorators.registerFormatter()
    export class UserDisplayNameFormatterByUserId implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var byId = HijrahQu.Administration.UserRow.getLookup().itemById;
            if (byId[ctx.value] != null) {
                return byId[ctx.value].DisplayName;
            } else {
                return ctx.value;
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class OrderStatusFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var classStatus = ''
            switch (ctx.value) {
                case "NewOrder":
                    classStatus = 'label label-primary'
                    break;
                case "Printed":
                    classStatus = 'label label-default'
                    break;
                case "In Progress":
                    classStatus = 'label label-default'
                    break;
                case "Delivery":
                    classStatus = 'label label-warning'
                    break;
                case "Received":
                    classStatus = 'label label-primary'
                    break;
                case "Complete":
                    classStatus = 'label label-success'
                    break;
                case "Close":
                    classStatus = 'label label-success'
                    break;
            }

            return '<span class="' + classStatus + '">' + Q.htmlEncode(ctx.value) + '</span>'
        }
    }
     

    @Serenity.Decorators.registerFormatter()
    export class NoResiFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            if (ctx.value != undefined) {
                return "<a href='https://track.aftership.com/jne/" + ctx.value + "'>" + ctx.value + "</a>";
            }
        }
    }


    @Serenity.Decorators.registerFormatter()
    export class InfoKirimFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            console.log(ctx.value);
            console.log("sss");
            var z = MessageWaRow.getLookup().itemById;
            var msg = z[1].MessageDesc;
            var orders = ViewOrderRow.getLookup().items.filter(x => x.OrderId == ctx.value);
            if (orders != null) {
                if (orders != undefined) {
                     if (orders.length > 0) {
                        var order = orders[0];
                        msg = msg.replace("[NoOrder]", "#" + ctx.value);
                        msg = msg.replace("[Nama]", order.CustomerName);
                        msg = msg.replace("[Alamat]", order.Address);
                        msg = msg.replace("[HP]", order.Handphone);
                        if (ctx.value != undefined) {
                            var url = "<a href='https://api.whatsapp.com/send?phone=" + order.Handphone + "&text=" + encodeURI(msg) + "'>" + "WA Kirim" + "</a>";
                            return url;
                        }
                    }
                }
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class InfoResiFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var z = MessageWaRow.getLookup().itemById;
            var msg = z[2].MessageDesc;
            var orders = ViewOrderRow.getLookup().items.filter(x => x.OrderId == ctx.value);
            if (orders != null) {
                if (orders != undefined) {
                    if (orders.length > 0) {
                        var order = orders[0];
                        msg = msg.replace("[NoOrder]", "#" + ctx.value);
                        msg = msg.replace("[Nama]", order.CustomerName);
                        msg = msg.replace("[Alamat]", order.Address);
                        msg = msg.replace("[HP]", order.Handphone);
                        msg = msg.replace("[NORESI]", order.NoResi);
                        if (ctx.value != undefined) {
                            var url = "<a href='https://api.whatsapp.com/send?phone=" + order.Handphone + "&text=" + encodeURI(msg) + "'>" + "WA Resi" + "</a>";
                            return url;
                        }
                    }
                }
            }
        }
    }

    @Serenity.Decorators.registerFormatter()
    export class InfoTagihFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var z = MessageWaRow.getLookup().itemById;
            var msg = z[3].MessageDesc;
            var orders = ViewOrderRow.getLookup().items.filter(x => x.OrderId == ctx.value);
            if (orders != null) {
                if (orders != undefined) {
                    if (orders.length > 0) {
                        var order = orders[0];
                        var totalHarga = order.TotalHarga + order.Ongkir;
                        msg = msg.replace("[NoOrder]", "#" + ctx.value);
                        msg = msg.replace("[Nama]", order.CustomerName);
                        msg = msg.replace("[ONGKIR]", order.Ongkir.toString());
                        //msg = msg.replace("[TOTALHARGA]", order.TotalHarga.toString());
                        msg = msg.replace("[JUMLAH]", totalHarga.toString());
                        msg = msg.replace("[RECEIVEDATE]", order.ReceiveDate);
                        msg = msg.replace("[RECEIVEBY]", order.ReceiveBy);
                        msg = msg.replace("[RECEIVETIME]", order.ReceiveTime);
                        //msg = msg.replace("[TOTALBAYAR]", (order.Ongkir + order.TotalHarga).toString());
                        if (ctx.value != undefined) {
                            var url = "<a href='https://api.whatsapp.com/send?phone=" + order.Handphone + "&text=" + encodeURI(msg) + "'>" + "WA Tagih" + "</a>";
                            return url;
                        }
                    }
                }
            }
        }
    }
}
