using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HijrahQu.Default
{
    public class Query
    {
        public string waybill { get; set; }
        public string courier { get; set; }
    }

    public class Status
    {
        public int code { get; set; }
        public string description { get; set; }
    }

    public class Summary
    {
        public string courier_code { get; set; }
        public string courier_name { get; set; }
        public string waybill_number { get; set; }
        public string service_code { get; set; }
        public string waybill_date { get; set; }
        public string shipper_name { get; set; }
        public string receiver_name { get; set; }
        public string origin { get; set; }
        public string destination { get; set; }
        public string status { get; set; }
    }

    public class Details
    {
        public string waybill_number { get; set; }
        public string waybill_date { get; set; }
        public string waybill_time { get; set; }
        public string weight { get; set; }
        public string origin { get; set; }
        public string destination { get; set; }
        public string shippper_name { get; set; }
        public string shipper_address1 { get; set; }
        public string shipper_address2 { get; set; }
        public string shipper_address3 { get; set; }
        public string shipper_city { get; set; }
        public string receiver_name { get; set; }
        public string receiver_address1 { get; set; }
        public string receiver_address2 { get; set; }
        public string receiver_address3 { get; set; }
        public string receiver_city { get; set; }
    }

    public class DeliveryStatus
    {
        public string status { get; set; }
        public string pod_receiver { get; set; }
        public string pod_date { get; set; }
        public string pod_time { get; set; }
    }

    public class Manifest
    {
        public string manifest_code { get; set; }
        public string manifest_description { get; set; }
        public string manifest_date { get; set; }
        public string manifest_time { get; set; }
        public string city_name { get; set; }
    }

    public class Result
    {
        public bool delivered { get; set; }
        public Summary summary { get; set; }
        public Details details { get; set; }
        public DeliveryStatus delivery_status { get; set; }
        public IList<Manifest> manifest { get; set; }
    }

    public class Rajaongkir
    {
        public Query query { get; set; }
        public Status status { get; set; }
        public Result result { get; set; }
    }

    public class Example
    {
        public Rajaongkir rajaongkir { get; set; }
    }


}