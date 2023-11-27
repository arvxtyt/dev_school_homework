class PaginationHelper {
	constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount = () => this.collection.length;
	pageCount = () => Math.ceil(this.itemCount() / this.itemsPerPage);
  pageItemCount = (pageIndex) => (pageIndex < 0 || pageIndex > this.pageCount() - 1) ? -1 : (pageIndex === this.pageCount() - 1) ? (this.itemCount() % this.itemsPerPage === 0) ? this.itemsPerPage : this.itemCount() % this.itemsPerPage : this.itemsPerPage;
	pageIndex = (itemIndex) => (itemIndex < 0 || itemIndex > this.itemCount() - 1) ? -1 : Math.floor(itemIndex / this.itemsPerPage);
}