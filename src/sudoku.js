const digits = '123456789';
const rows = 'ABCDEFGHI';
const cols = digits;
export const squares = cross(rows, cols);
export const unitlist = cols.split('').map(c => cross(rows, c))
  .concat(rows.split('').map(r => cross(r, cols)))
  .concat(['ABC', 'DEF', 'GHI']
    .flatMap(rs => ['123', '456', '789']
      .map(cs => cross(rs, cs))));
export const units = {};



/*

units = dict((s, [u for u in unitlist if s in u])
             for s in squares)
peers = dict((s, set(sum(units[s],[]))-set([s]))
             for s in squares)

*/



// [a+b for a in A for b in B]
function cross(A, B) {
  return A.split('')
    .flatMap(a => B.split('')
      .map(b => a+b))
}
