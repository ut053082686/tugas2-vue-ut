new Vue({
  el: "#app",
  data: function () { return { upbjjList: utData.upbjjList, pengirimanList: utData.pengirimanList, paket: utData.paket, stok: utData.stok, tracking: Object.assign({}, utData.tracking), selectedNumber: Object.keys(utData.tracking)[0], search: "", showForm: false, formError: "", form: thisBlankOrder() }; },
  computed: {
    orderNumbers: function () { return Object.keys(this.tracking); },
    filteredOrders: function () { var query = this.search.toLowerCase(); return this.orderNumbers.filter(function (number) { var order = this.tracking[number]; return !query || number.toLowerCase().indexOf(query) !== -1 || order.nama.toLowerCase().indexOf(query) !== -1; }, this); },
    selectedOrder: function () { return this.tracking[this.selectedNumber]; },
    selectedPackage: function () { return this.paket.find(function (item) { return item.kode === this.form.paket; }, this); },
    nextNumber: function () { var year = new Date().getFullYear(); var prefix = "DO" + year + "-"; var sequences = this.orderNumbers.map(function (number) { return number.indexOf(prefix) === 0 ? parseInt(number.slice(prefix.length), 10) : 0; }); var next = Math.max.apply(Math, sequences.concat([0])) + 1; return prefix + String(next).padStart(3, "0"); }
  },
  watch: {
    filteredOrders: function (orders) { if (orders.length && orders.indexOf(this.selectedNumber) === -1) this.selectedNumber = orders[0]; },
    "form.paket": function () { this.formError = ""; }
  },
  methods: {
    formatCurrency: function (value) { return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value); },
    expeditionName: function (code) { var item = this.pengirimanList.find(function (entry) { return entry.kode === code; }); return item ? item.nama : code; },
    packageName: function (code) { var item = this.paket.find(function (entry) { return entry.kode === code; }); return item ? item.nama : code; },
    stockName: function (code) { var item = this.stok.find(function (entry) { return entry.kode === code; }); return item ? item.judul : ""; },
    addOrder: function () {
      if (!this.selectedPackage) {
        this.formError = "Silakan pilih paket bahan ajar.";
        return;
      }
      var number = this.nextNumber;
      this.$set(this.tracking, number, { nim: this.form.nim, nama: this.form.nama, status: "Diproses", ekspedisi: this.form.ekspedisi, tanggalKirim: this.form.tanggalKirim, paket: this.form.paket, total: this.selectedPackage.harga, perjalanan: [{ waktu: this.form.tanggalKirim + " 08:00:00", keterangan: "Pesanan dibuat dan menunggu diproses" }] });
      this.selectedNumber = number;
      this.form = thisBlankOrder();
      this.showForm = false;
      alert("Delivery Order " + number + " berhasil ditambahkan.");
    }
  }
});
function thisBlankOrder() { return { nim: "", nama: "", ekspedisi: "", paket: "", tanggalKirim: new Date().toISOString().slice(0, 10) }; }
