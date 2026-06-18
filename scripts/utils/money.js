export function formatCurrency(priceCents){
  return (Math.round( priceCents)/100).toFixed(2);
}

export default formatCurrency;
/* 
ESM = ecmaScript modules
eecmascript = javascript
In esm version of any external library we dont use "type = module" in <script> tag 
to import the url of external library.

Hence we directly import the url in main script file.

Also many library have not the ESM verion so, WE STILL hvae to use script tag 
for them.

Types Of Export: 

1). named export -> we use curly brackets i.e "{}"  During import.
2). default export -> we dont use curly brackets i.e "not {}"  During import.

We Can have only 1 'Default Export' in each file.         

*/