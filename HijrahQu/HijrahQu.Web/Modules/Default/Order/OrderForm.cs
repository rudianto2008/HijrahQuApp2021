
namespace HijrahQu.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Order")]
    [BasedOnRow(typeof(Entities.OrderRow), CheckNames = true)]
    public class OrderForm
    {
        [Category("Informasi Pelanggan")]
        [Required, DisplayName("Nama")]
        public Int32 CustomerId { get; set; }
        //[ReadOnly(true)]
        //public String CustomerCustomerName { get; set; }
        [ReadOnly(true), TextAreaEditor(Rows = 3), DisplayName("Alamat")]
        public String CustomerAddress { get; set; }
        [ReadOnly(true), DisplayName("Handphone")]
        public Int64 CustomerHandphone { get; set; }
        //[LookupEditor(typeof(Default.Entities.KodePosRow)), DisplayName("Kode Pos")]
        //public String Kodepos { get; set; }
        //[ReadOnly(true), HalfWidth, DisplayName("Tanggal Order")]
        //public DateTime OrderDate { get; set; }
        //[DisplayName("No Resi"), HalfWidth]
        //public String NoResi { get; set; }
        [DisplayName("Status Order")]
        public String OrderStatus { get; set; }
        [Category("Informasi Harga")]
        [DefaultValue(0)]
        public Decimal Ongkir { get; set; }
        [DefaultValue(0)]
        public Decimal BiayaCOD { get; set; }
        //[HalfWidth, DefaultValue(149000)]
        //public Decimal TotalHarga { get; set; }
        [DefaultValue(0)]
        public Decimal TotalBayar { get; set; }
        [HalfWidth, CaraBayarEditor]
        public String CaraBayar { get; set; }
        [HalfWidth, ExpedisiEditor]
        public String Expedisi { get; set; }
        [Category("Informasi Tanggal")]
        [HalfWidth]
        public DateTime TanggalWa { get; set; }
        [HalfWidth]
        public DateTime TanggalKirim { get; set; }
        [HalfWidth]
        public DateTime TanggalClosing { get; set; }
        [HalfWidth]
        public DateTime TanggalBayar { get; set; }
        [ReadOnly(true)]
        public DateTime TanggalCS { get; set; }
        [ReadOnly(true), Visible(false)]
        public String DisplayName { get; set; }


        [Category("Detail Barang")]
        [Required]
        [OrderDetailsEditor]
        public List<Entities.OrderDetailRow> DetailList { get; set; }
        [DisplayName("Keterangan")]
        public String Keterangan { get; set; }

    }
}