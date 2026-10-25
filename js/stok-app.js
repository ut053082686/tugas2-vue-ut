new Vue({
  el: "#app",
  data: function () {
    return { upbjjList: utData.upbjjList, kategoriList: utData.kategoriList, stok: utData.stok.map(function (item) { return Object.assign({}, item); }), filters: { upbjj: "", kategori: "", sort: "judul", reorder: false }, modalOpen: false, editing: null, formError: "", form: {} };
  },
  computed: {
    kategoriOptions: function () { var selected = this.filters.upbjj; return this.kategoriList.filter(function (kategori) { return !selected || this.stok.some(function (item) { return item.upbjj === selected && item.kategori === kategori; }); }, this); },
    filteredStok: function () { var result = this.stok.filter(function (item) { var matchArea = !this.filters.upbjj || item.upbjj === this.filters.upbjj; var matchCategory = !this.filters.kategori || item.kategori === this.filters.kategori; var matchReorder = !this.filters.reorder || item.qty === 0 || item.qty < item.safety; return matchArea && matchCategory && matchReorder; }, this); var sort = this.filters.sort; return result.sort(function (a, b) { if (sort === "judul") return a.judul.localeCompare(b.judul); if (sort === "qty") return a.qty - b.qty; return a.harga - b.harga; }); }
  },
  watch: {
    "filters.upbjj": function (value) { if (!value) this.filters.kategori = ""; else if (this.kategoriOptions.indexOf(this.filters.kategori) === -1) this.filters.kategori = ""; },
    "filters.reorder": function () { this.filters.sort = "qty"; }
  },
  methods: {
    status: function (item) { if (item.qty === 0) return { label: "Kosong", class: "empty-status", icon: "×" }; if (item.qty < item.safety) return { label: "Menipis", class: "low-status", icon: "!" }; return { label: "Aman", class: "safe-status", icon: "✓" }; },
    countStatus: function (kind) {
      var classByKind = { aman: "safe-status", menipis: "low-status", kosong: "empty-status" };
      return this.stok.filter(function (item) { return this.status(item).class === classByKind[kind]; }, this).length;
    },
    resetFilters: function () { this.filters = { upbjj: "", kategori: "", sort: "judul", reorder: false }; },
    blankForm: function () { return { kode: "", judul: "", kategori: "", upbjj: "", lokasiRak: "", harga: 0, qty: 0, safety: 0, catatanHTML: "" }; },
    openAdd: function () { this.editing = null; this.form = this.blankForm(); this.formError = ""; this.modalOpen = true; },
    openEdit: function (item) { this.editing = item; this.form = Object.assign({}, item); this.formError = ""; this.modalOpen = true; },
    closeModal: function () { this.modalOpen = false; },
    saveItem: function () {
      if (this.form.qty < 0 || this.form.safety < 0 || this.form.harga < 0) {
        this.formError = "Stok, safety, dan harga tidak boleh bernilai negatif.";
        return;
      }
      if (this.editing) {
        Object.assign(this.editing, this.form);
        alert("Data stok berhasil diedit.");
      } else {
        this.stok.push(Object.assign({}, this.form));
        alert("Data bahan ajar berhasil ditambahkan.");
      }
      this.closeModal();
    }
  }
});
