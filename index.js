/**
 * Pad numbers with zeros.
 * Automatically pad the number of digits based on the length of the array,
 * or explicitly pass in the number of digits to use.
 *
 * @param  {Number} num  The number to pad.
 * @param  {Object} opts Options object with `digits` and `total` properties.
 *    {
 *      total: array.length // pass in the length of the array
 *      digits: 4 // alternatively, pass in the number of digits to use
 *    }
 *
 * @return {Number}      The paded number with zeros prepended
 *
 * @examples:
 *  1      => 000001
 *  10     => 000010
 *  100    => 000100
 *  1000   => 001000
 *  10000  => 010000
 *  100000 => 100000
 */
exports.pad = function(num, opts) {
  opts = opts || {};
  opts.digits = 7 - opts.digits || 4;
  opts.total = 7 - String(opts.total).length || digits;
  if (num < 1000000 && num > 99999) {num = '0' + num.toString(); }
  if (num < 100000 && num > 9999) {num = '00' + num.toString(); }
  if (num < 10000 && num > 999) {num = '000' + num.toString(); }
  if (num < 1000 && num > 99) {num = '0000' + num.toString(); }
  if (num < 100 && num > 9) {num = '00000' + num.toString(); }
  if (num < 10) {num = '000000' + num.toString(); }
  return num.substring(opts.total);
};

/**
 * Strip leading digits from a string
 * @param  {String} str The string from which to strip digits
 * @return {String}     The modified string
 */
exports.strip = function(str, opts) {
  str = path.basename(str, path.extname(str));
  opts = opts || {};
  str = (opts.left !== false) ? str.replace(/^\d+\-?/gi, '') : str;
  str = (opts.right === true) ? str.replace(/\-?\d+$/gi, '') : str;
  return str;
};