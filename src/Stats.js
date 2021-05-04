import React from 'react';

export const Stats = ({
    allGameResults
}) => {

    console.log("Stats", allGameResults);

    const wins = allGameResults.filter(x => x.gameResult == "W");
    const mostRecentWin = wins[wins.length - 1];
    console.log(mostRecentWin);

    const loss = allGameResults.filter(x => x.gameResult == "L");
    const mostRecentLoss = wins[loss.length - 1];
    console.log(mostRecentLoss);

    return(
        <>
            <h2>
                { allGameResults.length } Games
            </h2>
            <br/>
            <h2>
                { allGameResults.filter(x => x.gameResult == "W").length } Wins
            </h2>
            <br/>
            <h2>
                { allGameResults.filter(x => x.gameResult == "L").length } Losses
            </h2>
    
            <br />
            <h2> 
                Recent Games 
            </h2>
            <h3>
                Most Recent Win:
            </h3>
            <ul>
                <li>
                    Name: { mostRecentWin.playerName }
                </li>
                <li>
                    Score: { mostRecentWin.playerScore }
                </li>
                <li>
                    Single crowns: { mostRecentWin.singleCrownCount }
                </li>
                <li>
                    Double crowns: { mostRecentWin.doubleCrownCount }
                </li>
                <li>
                    Triple crowns: { mostRecentWin.tripleCrownCount } 
                </li>
            </ul>    
            <h3>
                Most Recent Loss: 
            </h3>
            <ul>
                <li>
                    Name: { mostRecentLoss.playerName }
                </li>
                <li>
                    Score: { mostRecentLoss.playerScore }
                </li>
                <li>
                    Single crowns: { mostRecentLoss.singleCrownCount }
                </li>
                <li>
                    Double crowns: { mostRecentLoss.doubleCrownCount }
                </li>
                <li>
                    Triple crowns: { mostRecentLoss.tripleCrownCount } 
                </li>
            </ul>   
            <p>
                Coming soon ! ! !
            </p>
        </>
    );
}

