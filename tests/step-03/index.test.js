const parseQuery = require('/Users/jasleengill/stylusdb-sql-assignment-jasleengill2003/src/queryParser.js');

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample'
    });
});