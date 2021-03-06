import { expect } from 'chai';
import {
  squares,
  unitlist,
  units,
  peers,
} from './sudoku.js';

describe('norvig-sudoku', () => {
  describe('features a squares array', () => {
    it('with 81 elements', () => {
      expect(squares.length).to.eql(81);
    });
  });
  describe('features a unitlist array', () => {
    it('with 27 elements', () => {
      expect(squares.length).to.eql(27);
    });
  });
});

/*

def test():
    "A set of unit tests."
    assert len(squares) == 81
    assert len(unitlist) == 27
    assert all(len(units[s]) == 3 for s in squares)
    assert all(len(peers[s]) == 20 for s in squares)
    assert units['C2'] == [['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2'],
                           ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
                           ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3']]
    assert peers['C2'] == set(['A2', 'B2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2',
                               'C1', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9',
                               'A1', 'A3', 'B1', 'B3'])
    print 'All tests pass.'

*/
