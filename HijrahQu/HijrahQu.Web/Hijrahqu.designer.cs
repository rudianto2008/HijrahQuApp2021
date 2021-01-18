﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HijrahQu
{
	using System.Data.Linq;
	using System.Data.Linq.Mapping;
	using System.Data;
	using System.Collections.Generic;
	using System.Reflection;
	using System.Linq;
	using System.Linq.Expressions;
	using System.ComponentModel;
	using System;
	
	
	[global::System.Data.Linq.Mapping.DatabaseAttribute(Name="hijrahqu_newdb")]
	public partial class HijrahquDataContext : System.Data.Linq.DataContext
	{
		
		private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
		
    #region Extensibility Method Definitions
    partial void OnCreated();
    partial void InsertOrder(Order instance);
    partial void UpdateOrder(Order instance);
    partial void DeleteOrder(Order instance);
    #endregion
		
		public HijrahquDataContext() : 
				base(global::System.Configuration.ConfigurationManager.ConnectionStrings["Default"].ConnectionString, mappingSource)
		{
			OnCreated();
		}
		
		public HijrahquDataContext(string connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public HijrahquDataContext(System.Data.IDbConnection connection) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public HijrahquDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public HijrahquDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
				base(connection, mappingSource)
		{
			OnCreated();
		}
		
		public System.Data.Linq.Table<ViewLapPenjualan> ViewLapPenjualans
		{
			get
			{
				return this.GetTable<ViewLapPenjualan>();
			}
		}
		
		public System.Data.Linq.Table<Order> Orders
		{
			get
			{
				return this.GetTable<Order>();
			}
		}
		
		public System.Data.Linq.Table<ViewOrder> ViewOrders
		{
			get
			{
				return this.GetTable<ViewOrder>();
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.ViewLapPenjualan")]
	public partial class ViewLapPenjualan
	{
		
		private int _OrderID;
		
		private System.Nullable<System.DateTime> _OrderDate;
		
		private string _CustomerName;
		
		private string _Address;
		
		private string _Handphone;
		
		private System.Nullable<decimal> _TotalHarga;
		
		private System.Nullable<decimal> _Ongkir;
		
		private System.Nullable<decimal> _TotalBayar;
		
		private System.Nullable<System.DateTime> _TanggalWa;
		
		private System.Nullable<System.DateTime> _TanggalKirim;
		
		private System.Nullable<System.DateTime> _TanggalBayar;
		
		private System.Nullable<System.DateTime> _TanggalCS;
		
		private System.Nullable<System.DateTime> _TanggalClosing;
		
		public ViewLapPenjualan()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderID", DbType="Int NOT NULL")]
		public int OrderID
		{
			get
			{
				return this._OrderID;
			}
			set
			{
				if ((this._OrderID != value))
				{
					this._OrderID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderDate", DbType="DateTime")]
		public System.Nullable<System.DateTime> OrderDate
		{
			get
			{
				return this._OrderDate;
			}
			set
			{
				if ((this._OrderDate != value))
				{
					this._OrderDate = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CustomerName", DbType="NVarChar(50)")]
		public string CustomerName
		{
			get
			{
				return this._CustomerName;
			}
			set
			{
				if ((this._CustomerName != value))
				{
					this._CustomerName = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Address", DbType="NVarChar(500)")]
		public string Address
		{
			get
			{
				return this._Address;
			}
			set
			{
				if ((this._Address != value))
				{
					this._Address = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Handphone", DbType="NVarChar(50)")]
		public string Handphone
		{
			get
			{
				return this._Handphone;
			}
			set
			{
				if ((this._Handphone != value))
				{
					this._Handphone = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TotalHarga", DbType="Money")]
		public System.Nullable<decimal> TotalHarga
		{
			get
			{
				return this._TotalHarga;
			}
			set
			{
				if ((this._TotalHarga != value))
				{
					this._TotalHarga = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Ongkir", DbType="Money")]
		public System.Nullable<decimal> Ongkir
		{
			get
			{
				return this._Ongkir;
			}
			set
			{
				if ((this._Ongkir != value))
				{
					this._Ongkir = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TotalBayar", DbType="Money")]
		public System.Nullable<decimal> TotalBayar
		{
			get
			{
				return this._TotalBayar;
			}
			set
			{
				if ((this._TotalBayar != value))
				{
					this._TotalBayar = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalWa", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalWa
		{
			get
			{
				return this._TanggalWa;
			}
			set
			{
				if ((this._TanggalWa != value))
				{
					this._TanggalWa = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalKirim", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalKirim
		{
			get
			{
				return this._TanggalKirim;
			}
			set
			{
				if ((this._TanggalKirim != value))
				{
					this._TanggalKirim = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalBayar", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalBayar
		{
			get
			{
				return this._TanggalBayar;
			}
			set
			{
				if ((this._TanggalBayar != value))
				{
					this._TanggalBayar = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalCS", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalCS
		{
			get
			{
				return this._TanggalCS;
			}
			set
			{
				if ((this._TanggalCS != value))
				{
					this._TanggalCS = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalClosing", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalClosing
		{
			get
			{
				return this._TanggalClosing;
			}
			set
			{
				if ((this._TanggalClosing != value))
				{
					this._TanggalClosing = value;
				}
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.[Order]")]
	public partial class Order : INotifyPropertyChanging, INotifyPropertyChanged
	{
		
		private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
		
		private int _OrderID;
		
		private System.Nullable<System.DateTime> _OrderDate;
		
		private System.Nullable<int> _CustomerID;
		
		private string _OrderStatus;
		
		private string _NoResi;
		
		private System.Nullable<decimal> _Ongkir;
		
		private System.Nullable<decimal> _TotalHarga;
		
		private System.Nullable<decimal> _TotalBayar;
		
		private string _SudahBayar;
		
		private System.Nullable<System.DateTime> _TanggalWa;
		
		private System.Nullable<System.DateTime> _TanggalKirim;
		
		private System.Nullable<System.DateTime> _TanggalBayar;
		
		private System.Nullable<System.DateTime> _TanggalCS;
		
		private System.Nullable<System.DateTime> _TanggalClosing;
		
		private System.Nullable<int> _InsertUserId;
		
		private System.Nullable<System.DateTime> _InsertDate;
		
		private System.Nullable<int> _UpdateUserId;
		
		private System.Nullable<System.DateTime> _UpdateDate;
		
		private string _ReceiveDate;
		
		private string _ReceiveBy;
		
		private string _ReceiveTime;
		
		private string _DisplayName;
		
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnOrderIDChanging(int value);
    partial void OnOrderIDChanged();
    partial void OnOrderDateChanging(System.Nullable<System.DateTime> value);
    partial void OnOrderDateChanged();
    partial void OnCustomerIDChanging(System.Nullable<int> value);
    partial void OnCustomerIDChanged();
    partial void OnOrderStatusChanging(string value);
    partial void OnOrderStatusChanged();
    partial void OnNoResiChanging(string value);
    partial void OnNoResiChanged();
    partial void OnOngkirChanging(System.Nullable<decimal> value);
    partial void OnOngkirChanged();
    partial void OnTotalHargaChanging(System.Nullable<decimal> value);
    partial void OnTotalHargaChanged();
    partial void OnTotalBayarChanging(System.Nullable<decimal> value);
    partial void OnTotalBayarChanged();
    partial void OnSudahBayarChanging(string value);
    partial void OnSudahBayarChanged();
    partial void OnTanggalWaChanging(System.Nullable<System.DateTime> value);
    partial void OnTanggalWaChanged();
    partial void OnTanggalKirimChanging(System.Nullable<System.DateTime> value);
    partial void OnTanggalKirimChanged();
    partial void OnTanggalBayarChanging(System.Nullable<System.DateTime> value);
    partial void OnTanggalBayarChanged();
    partial void OnTanggalCSChanging(System.Nullable<System.DateTime> value);
    partial void OnTanggalCSChanged();
    partial void OnTanggalClosingChanging(System.Nullable<System.DateTime> value);
    partial void OnTanggalClosingChanged();
    partial void OnInsertUserIdChanging(System.Nullable<int> value);
    partial void OnInsertUserIdChanged();
    partial void OnInsertDateChanging(System.Nullable<System.DateTime> value);
    partial void OnInsertDateChanged();
    partial void OnUpdateUserIdChanging(System.Nullable<int> value);
    partial void OnUpdateUserIdChanged();
    partial void OnUpdateDateChanging(System.Nullable<System.DateTime> value);
    partial void OnUpdateDateChanged();
    partial void OnReceiveDateChanging(string value);
    partial void OnReceiveDateChanged();
    partial void OnReceiveByChanging(string value);
    partial void OnReceiveByChanged();
    partial void OnReceiveTimeChanging(string value);
    partial void OnReceiveTimeChanged();
    partial void OnDisplayNameChanging(string value);
    partial void OnDisplayNameChanged();
    #endregion
		
		public Order()
		{
			OnCreated();
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderID", AutoSync=AutoSync.OnInsert, DbType="Int NOT NULL IDENTITY", IsPrimaryKey=true, IsDbGenerated=true)]
		public int OrderID
		{
			get
			{
				return this._OrderID;
			}
			set
			{
				if ((this._OrderID != value))
				{
					this.OnOrderIDChanging(value);
					this.SendPropertyChanging();
					this._OrderID = value;
					this.SendPropertyChanged("OrderID");
					this.OnOrderIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderDate", DbType="DateTime")]
		public System.Nullable<System.DateTime> OrderDate
		{
			get
			{
				return this._OrderDate;
			}
			set
			{
				if ((this._OrderDate != value))
				{
					this.OnOrderDateChanging(value);
					this.SendPropertyChanging();
					this._OrderDate = value;
					this.SendPropertyChanged("OrderDate");
					this.OnOrderDateChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CustomerID", DbType="Int")]
		public System.Nullable<int> CustomerID
		{
			get
			{
				return this._CustomerID;
			}
			set
			{
				if ((this._CustomerID != value))
				{
					this.OnCustomerIDChanging(value);
					this.SendPropertyChanging();
					this._CustomerID = value;
					this.SendPropertyChanged("CustomerID");
					this.OnCustomerIDChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderStatus", DbType="NVarChar(50)")]
		public string OrderStatus
		{
			get
			{
				return this._OrderStatus;
			}
			set
			{
				if ((this._OrderStatus != value))
				{
					this.OnOrderStatusChanging(value);
					this.SendPropertyChanging();
					this._OrderStatus = value;
					this.SendPropertyChanged("OrderStatus");
					this.OnOrderStatusChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NoResi", DbType="NVarChar(50)")]
		public string NoResi
		{
			get
			{
				return this._NoResi;
			}
			set
			{
				if ((this._NoResi != value))
				{
					this.OnNoResiChanging(value);
					this.SendPropertyChanging();
					this._NoResi = value;
					this.SendPropertyChanged("NoResi");
					this.OnNoResiChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Ongkir", DbType="Money")]
		public System.Nullable<decimal> Ongkir
		{
			get
			{
				return this._Ongkir;
			}
			set
			{
				if ((this._Ongkir != value))
				{
					this.OnOngkirChanging(value);
					this.SendPropertyChanging();
					this._Ongkir = value;
					this.SendPropertyChanged("Ongkir");
					this.OnOngkirChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TotalHarga", DbType="Money")]
		public System.Nullable<decimal> TotalHarga
		{
			get
			{
				return this._TotalHarga;
			}
			set
			{
				if ((this._TotalHarga != value))
				{
					this.OnTotalHargaChanging(value);
					this.SendPropertyChanging();
					this._TotalHarga = value;
					this.SendPropertyChanged("TotalHarga");
					this.OnTotalHargaChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TotalBayar", DbType="Money")]
		public System.Nullable<decimal> TotalBayar
		{
			get
			{
				return this._TotalBayar;
			}
			set
			{
				if ((this._TotalBayar != value))
				{
					this.OnTotalBayarChanging(value);
					this.SendPropertyChanging();
					this._TotalBayar = value;
					this.SendPropertyChanged("TotalBayar");
					this.OnTotalBayarChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SudahBayar", DbType="NVarChar(5)")]
		public string SudahBayar
		{
			get
			{
				return this._SudahBayar;
			}
			set
			{
				if ((this._SudahBayar != value))
				{
					this.OnSudahBayarChanging(value);
					this.SendPropertyChanging();
					this._SudahBayar = value;
					this.SendPropertyChanged("SudahBayar");
					this.OnSudahBayarChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalWa", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalWa
		{
			get
			{
				return this._TanggalWa;
			}
			set
			{
				if ((this._TanggalWa != value))
				{
					this.OnTanggalWaChanging(value);
					this.SendPropertyChanging();
					this._TanggalWa = value;
					this.SendPropertyChanged("TanggalWa");
					this.OnTanggalWaChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalKirim", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalKirim
		{
			get
			{
				return this._TanggalKirim;
			}
			set
			{
				if ((this._TanggalKirim != value))
				{
					this.OnTanggalKirimChanging(value);
					this.SendPropertyChanging();
					this._TanggalKirim = value;
					this.SendPropertyChanged("TanggalKirim");
					this.OnTanggalKirimChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalBayar", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalBayar
		{
			get
			{
				return this._TanggalBayar;
			}
			set
			{
				if ((this._TanggalBayar != value))
				{
					this.OnTanggalBayarChanging(value);
					this.SendPropertyChanging();
					this._TanggalBayar = value;
					this.SendPropertyChanged("TanggalBayar");
					this.OnTanggalBayarChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalCS", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalCS
		{
			get
			{
				return this._TanggalCS;
			}
			set
			{
				if ((this._TanggalCS != value))
				{
					this.OnTanggalCSChanging(value);
					this.SendPropertyChanging();
					this._TanggalCS = value;
					this.SendPropertyChanged("TanggalCS");
					this.OnTanggalCSChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TanggalClosing", DbType="DateTime")]
		public System.Nullable<System.DateTime> TanggalClosing
		{
			get
			{
				return this._TanggalClosing;
			}
			set
			{
				if ((this._TanggalClosing != value))
				{
					this.OnTanggalClosingChanging(value);
					this.SendPropertyChanging();
					this._TanggalClosing = value;
					this.SendPropertyChanged("TanggalClosing");
					this.OnTanggalClosingChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_InsertUserId", DbType="Int")]
		public System.Nullable<int> InsertUserId
		{
			get
			{
				return this._InsertUserId;
			}
			set
			{
				if ((this._InsertUserId != value))
				{
					this.OnInsertUserIdChanging(value);
					this.SendPropertyChanging();
					this._InsertUserId = value;
					this.SendPropertyChanged("InsertUserId");
					this.OnInsertUserIdChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_InsertDate", DbType="DateTime")]
		public System.Nullable<System.DateTime> InsertDate
		{
			get
			{
				return this._InsertDate;
			}
			set
			{
				if ((this._InsertDate != value))
				{
					this.OnInsertDateChanging(value);
					this.SendPropertyChanging();
					this._InsertDate = value;
					this.SendPropertyChanged("InsertDate");
					this.OnInsertDateChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_UpdateUserId", DbType="Int")]
		public System.Nullable<int> UpdateUserId
		{
			get
			{
				return this._UpdateUserId;
			}
			set
			{
				if ((this._UpdateUserId != value))
				{
					this.OnUpdateUserIdChanging(value);
					this.SendPropertyChanging();
					this._UpdateUserId = value;
					this.SendPropertyChanged("UpdateUserId");
					this.OnUpdateUserIdChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_UpdateDate", DbType="DateTime")]
		public System.Nullable<System.DateTime> UpdateDate
		{
			get
			{
				return this._UpdateDate;
			}
			set
			{
				if ((this._UpdateDate != value))
				{
					this.OnUpdateDateChanging(value);
					this.SendPropertyChanging();
					this._UpdateDate = value;
					this.SendPropertyChanged("UpdateDate");
					this.OnUpdateDateChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ReceiveDate", DbType="NVarChar(50)")]
		public string ReceiveDate
		{
			get
			{
				return this._ReceiveDate;
			}
			set
			{
				if ((this._ReceiveDate != value))
				{
					this.OnReceiveDateChanging(value);
					this.SendPropertyChanging();
					this._ReceiveDate = value;
					this.SendPropertyChanged("ReceiveDate");
					this.OnReceiveDateChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ReceiveBy", DbType="NVarChar(50)")]
		public string ReceiveBy
		{
			get
			{
				return this._ReceiveBy;
			}
			set
			{
				if ((this._ReceiveBy != value))
				{
					this.OnReceiveByChanging(value);
					this.SendPropertyChanging();
					this._ReceiveBy = value;
					this.SendPropertyChanged("ReceiveBy");
					this.OnReceiveByChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ReceiveTime", DbType="NVarChar(50)")]
		public string ReceiveTime
		{
			get
			{
				return this._ReceiveTime;
			}
			set
			{
				if ((this._ReceiveTime != value))
				{
					this.OnReceiveTimeChanging(value);
					this.SendPropertyChanging();
					this._ReceiveTime = value;
					this.SendPropertyChanged("ReceiveTime");
					this.OnReceiveTimeChanged();
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DisplayName", DbType="NVarChar(50)")]
		public string DisplayName
		{
			get
			{
				return this._DisplayName;
			}
			set
			{
				if ((this._DisplayName != value))
				{
					this.OnDisplayNameChanging(value);
					this.SendPropertyChanging();
					this._DisplayName = value;
					this.SendPropertyChanged("DisplayName");
					this.OnDisplayNameChanged();
				}
			}
		}
		
		public event PropertyChangingEventHandler PropertyChanging;
		
		public event PropertyChangedEventHandler PropertyChanged;
		
		protected virtual void SendPropertyChanging()
		{
			if ((this.PropertyChanging != null))
			{
				this.PropertyChanging(this, emptyChangingEventArgs);
			}
		}
		
		protected virtual void SendPropertyChanged(String propertyName)
		{
			if ((this.PropertyChanged != null))
			{
				this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
			}
		}
	}
	
	[global::System.Data.Linq.Mapping.TableAttribute(Name="dbo.ViewOrder")]
	public partial class ViewOrder
	{
		
		private int _OrderID;
		
		private System.Nullable<System.DateTime> _OrderDate;
		
		private System.Nullable<int> _Quantity;
		
		private string _CustomerName;
		
		private string _Address;
		
		private string _Handphone;
		
		private string _NamaPengirim;
		
		private string _NoPengirim;
		
		private string _NoResi;
		
		private System.Nullable<decimal> _ongkir;
		
		private System.Nullable<decimal> _TotalHarga;
		
		private System.Nullable<decimal> _TotalBayar;
		
		private string _OrderStatus;
		
		private string _ReceiveDate;
		
		private string _ReceiveBy;
		
		private string _ReceiveTime;
		
		private string _Province;
		
		private string _City;
		
		private string _District;
		
		private string _KodePos;
		
		private System.Nullable<decimal> _SalePrice;
		
		private System.Nullable<decimal> _Price;
		
		private string _ProductCode;
		
		private System.Nullable<int> _InsertUserId;
		
		private string _DisplayName;
		
		private string _ProductName;
		
		private string _Expedisi;
		
		private string _CaraBayar;
		
		private string _Keterangan;
		
		public ViewOrder()
		{
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderID", DbType="Int NOT NULL")]
		public int OrderID
		{
			get
			{
				return this._OrderID;
			}
			set
			{
				if ((this._OrderID != value))
				{
					this._OrderID = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderDate", DbType="DateTime")]
		public System.Nullable<System.DateTime> OrderDate
		{
			get
			{
				return this._OrderDate;
			}
			set
			{
				if ((this._OrderDate != value))
				{
					this._OrderDate = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Quantity", DbType="Int")]
		public System.Nullable<int> Quantity
		{
			get
			{
				return this._Quantity;
			}
			set
			{
				if ((this._Quantity != value))
				{
					this._Quantity = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CustomerName", DbType="NVarChar(50)")]
		public string CustomerName
		{
			get
			{
				return this._CustomerName;
			}
			set
			{
				if ((this._CustomerName != value))
				{
					this._CustomerName = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Address", DbType="NVarChar(500)")]
		public string Address
		{
			get
			{
				return this._Address;
			}
			set
			{
				if ((this._Address != value))
				{
					this._Address = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Handphone", DbType="NVarChar(50)")]
		public string Handphone
		{
			get
			{
				return this._Handphone;
			}
			set
			{
				if ((this._Handphone != value))
				{
					this._Handphone = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NamaPengirim", DbType="VarChar(18) NOT NULL", CanBeNull=false)]
		public string NamaPengirim
		{
			get
			{
				return this._NamaPengirim;
			}
			set
			{
				if ((this._NamaPengirim != value))
				{
					this._NamaPengirim = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NoPengirim", DbType="VarChar(12) NOT NULL", CanBeNull=false)]
		public string NoPengirim
		{
			get
			{
				return this._NoPengirim;
			}
			set
			{
				if ((this._NoPengirim != value))
				{
					this._NoPengirim = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_NoResi", DbType="NVarChar(50)")]
		public string NoResi
		{
			get
			{
				return this._NoResi;
			}
			set
			{
				if ((this._NoResi != value))
				{
					this._NoResi = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ongkir", DbType="Money")]
		public System.Nullable<decimal> ongkir
		{
			get
			{
				return this._ongkir;
			}
			set
			{
				if ((this._ongkir != value))
				{
					this._ongkir = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TotalHarga", DbType="Money")]
		public System.Nullable<decimal> TotalHarga
		{
			get
			{
				return this._TotalHarga;
			}
			set
			{
				if ((this._TotalHarga != value))
				{
					this._TotalHarga = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_TotalBayar", DbType="Money")]
		public System.Nullable<decimal> TotalBayar
		{
			get
			{
				return this._TotalBayar;
			}
			set
			{
				if ((this._TotalBayar != value))
				{
					this._TotalBayar = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_OrderStatus", DbType="NVarChar(50)")]
		public string OrderStatus
		{
			get
			{
				return this._OrderStatus;
			}
			set
			{
				if ((this._OrderStatus != value))
				{
					this._OrderStatus = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ReceiveDate", DbType="NVarChar(50)")]
		public string ReceiveDate
		{
			get
			{
				return this._ReceiveDate;
			}
			set
			{
				if ((this._ReceiveDate != value))
				{
					this._ReceiveDate = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ReceiveBy", DbType="NVarChar(50)")]
		public string ReceiveBy
		{
			get
			{
				return this._ReceiveBy;
			}
			set
			{
				if ((this._ReceiveBy != value))
				{
					this._ReceiveBy = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ReceiveTime", DbType="NVarChar(50)")]
		public string ReceiveTime
		{
			get
			{
				return this._ReceiveTime;
			}
			set
			{
				if ((this._ReceiveTime != value))
				{
					this._ReceiveTime = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Province", DbType="NVarChar(50)")]
		public string Province
		{
			get
			{
				return this._Province;
			}
			set
			{
				if ((this._Province != value))
				{
					this._Province = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_City", DbType="NVarChar(50)")]
		public string City
		{
			get
			{
				return this._City;
			}
			set
			{
				if ((this._City != value))
				{
					this._City = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_District", DbType="NVarChar(50)")]
		public string District
		{
			get
			{
				return this._District;
			}
			set
			{
				if ((this._District != value))
				{
					this._District = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_KodePos", DbType="NVarChar(50)")]
		public string KodePos
		{
			get
			{
				return this._KodePos;
			}
			set
			{
				if ((this._KodePos != value))
				{
					this._KodePos = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_SalePrice", DbType="Money")]
		public System.Nullable<decimal> SalePrice
		{
			get
			{
				return this._SalePrice;
			}
			set
			{
				if ((this._SalePrice != value))
				{
					this._SalePrice = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Price", DbType="Money")]
		public System.Nullable<decimal> Price
		{
			get
			{
				return this._Price;
			}
			set
			{
				if ((this._Price != value))
				{
					this._Price = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProductCode", DbType="NVarChar(50)")]
		public string ProductCode
		{
			get
			{
				return this._ProductCode;
			}
			set
			{
				if ((this._ProductCode != value))
				{
					this._ProductCode = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_InsertUserId", DbType="Int")]
		public System.Nullable<int> InsertUserId
		{
			get
			{
				return this._InsertUserId;
			}
			set
			{
				if ((this._InsertUserId != value))
				{
					this._InsertUserId = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_DisplayName", DbType="NVarChar(100) NOT NULL", CanBeNull=false)]
		public string DisplayName
		{
			get
			{
				return this._DisplayName;
			}
			set
			{
				if ((this._DisplayName != value))
				{
					this._DisplayName = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_ProductName", DbType="NVarChar(50)")]
		public string ProductName
		{
			get
			{
				return this._ProductName;
			}
			set
			{
				if ((this._ProductName != value))
				{
					this._ProductName = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Expedisi", DbType="NVarChar(50)")]
		public string Expedisi
		{
			get
			{
				return this._Expedisi;
			}
			set
			{
				if ((this._Expedisi != value))
				{
					this._Expedisi = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_CaraBayar", DbType="NVarChar(50)")]
		public string CaraBayar
		{
			get
			{
				return this._CaraBayar;
			}
			set
			{
				if ((this._CaraBayar != value))
				{
					this._CaraBayar = value;
				}
			}
		}
		
		[global::System.Data.Linq.Mapping.ColumnAttribute(Storage="_Keterangan", DbType="NVarChar(500)")]
		public string Keterangan
		{
			get
			{
				return this._Keterangan;
			}
			set
			{
				if ((this._Keterangan != value))
				{
					this._Keterangan = value;
				}
			}
		}
	}
}
#pragma warning restore 1591