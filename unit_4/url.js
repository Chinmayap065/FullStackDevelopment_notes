const {URL}=require('url');
const addr='http://example.com/products?category=books';
const parsed=new URL(addr);
console.log(parsed.hostname);
console.log(parsed.pathname);
console.log(parsed.searchParams.get('id'));
console.log(parsed.searchParams.get('category'));