var numeric_reg_exp = new RegExp("^[0-9]+$");
  var intQuantity = parseInt(quantity, 10);
  if (!numeric_reg_exp.test(quantity) || (0 >= intQuantity)) {
    alert(getMessage("Quantity must be a positive whole number"));
    return false;
  }
