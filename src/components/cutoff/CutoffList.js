
function CutoffList({cutoffs, bracket}) {

    const titles = ['Merciless Gladiator', 'Gladiator', 'Duelist', 'Rival', 'Challenger']
    return (
        <section>
            <h2>{bracket}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Rating</th>
                    </tr>
                        {cutoffs.map((cutoff, index) => (
                            <tr key={index}>
                                <td>{titles[index]}</td>
                                <td>{cutoff.rating_cutoff}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
}

export default CutoffList;
