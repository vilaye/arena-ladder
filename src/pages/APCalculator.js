import { useState } from "react";

function APCalculatorPage () {

    const [twos, setTwos] = useState('');
    const [threes, setThrees] = useState('');
    const [fives, setFives] = useState('');

    function calculatePoints (bracket, rating) {
        var result = 0;

        if (rating === null || rating === 0 || rating === '') {
            return 0
        }
        var exponent = Math.pow(2.71828, -0.00412 * rating);
        result = 356 + (1157 / (1 + (1675 * exponent)));

        if (bracket === '2v2') {
            result = result * 0.76
        } 
        if (bracket === '3v3') {
            result = result * 0.88
        }
        return Math.floor(result + 0.5);
    }

    return (
        <div>
            <h1>Arena Points Calculator</h1>
            <table>
                <thead>
                    <tr>
                        <th>Bracket</th>
                        <th>Rating</th>
                        <th>Arena Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2v2</td>
                        <td><input type="number" onChange={e => setTwos(e.target.value)}/></td>
                        <td>{calculatePoints('2v2', twos)}</td>
                    </tr>
                    <tr>
                        <td>2v2</td>
                        <td><input type="number" onChange={e => setThrees(e.target.value)}/></td>
                        <td>{calculatePoints('3v3', threes)}</td>
                    </tr>
                    <tr>
                        <td>2v2</td>
                        <td><input type="number" onChange={e => setFives(e.target.value)}/></td>
                        <td>{calculatePoints('5v5', fives)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default APCalculatorPage;