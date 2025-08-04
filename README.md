# rcv-wa
## Analysis of Ranked-Choice Voting Impact on WA Elections

Washington State has used a [Top 2](https://en.wikipedia.org/wiki/Nonpartisan_blanket_primary) primary since 2008:

> The two candidates who receive the most votes in the Primary Election qualify for the General Election. A candidate must also receive at least 1% of the votes cast in that race to advance to the General Election.

Sometimes, the top two candidates in a primary don't receive a majority of the votes cast, in which case most of the people voting in the primary do not get the opportunity to vote for their chosen candidate in the general election.

This is rare: it has happened in only 8 out of 1,004 primary races in Washington since Top 2 was introduced. And in most of those cases, the two candidates advancing to the general belonged to different parties, so voters were at least able to vote for their preferred party, if not for their preferred candidate.

However, there has been at least one case where the top two primary finishers belonged to the same party *and* together received less than 50% of the vote:

```
2016/08/02 - State Treasurer
Top 2 had 48.42% of the vote:
  Duane Davidson (R): 25.09 | 58.15
  Michael Waite (R): 23.33 | 41.85
  Marko Liias (D): 20.36
  John Paul Comerford (D): 17.97
  Alec Fisken (D): 13.24
Party share:
  (Prefers Democratic Party): 51.57
  (Prefers Republican Party): 48.42
```

In this case, even though Democrats captured well over 51% of the total primary vote share, no Democrat made it to the general, because the three Democrats split the vote and spoiled the chance for any of them to advance.

I was curious what difference it might make to adopt Ranked-Choice Voting.

Results (`npm install;npm start`):

```
20100817 - Legislative District 1 - State Representative Pos. 1
Top 2 had 49.79% of the vote:
  Derek Stanford (Prefers Democratic Party): 26.01
  Dennis Richter (Prefers Republican Party): 23.78
  Vince DeMiero (Prefers Democratic Party): 23.09
  Sandy Guinn (Prefers Republican Party): 22.65
  Dick Lapinski (Prefers Republican Party): 4.47
Party share:
  (Prefers Republican Party): 50.90
  (Prefers Democratic Party): 49.10

20100817 - Legislative District 40 - State Representative Pos. 1
Top 2 had 43.69% of the vote:
  Kristine Lytton (Prefers Democratic Party): 26.31
  Mike Newman (Prefers Republican Party): 17.38
  Tom Pasma (Prefers Democratic Party): 15.70
  Dusty Gulleson (Prefers Republican Party): 15.66
  Thomas Boucher (Prefers Democratic Party): 7.98
  Donna R. Miller (Prefers Republican Party): 7.63
  Chuck Carrell (Prefers Republican Party): 4.40
  Justin Van Dyk (Prefers Democratic Party): 3.04
  Doug (Yoshe) Revelle (Prefers Happiness Party): 1.91
Party share:
  (Prefers Democratic Party): 53.03
  (Prefers Republican Party): 45.07
  (Prefers Happiness Party): 1.91

20120807 - Legislative District 3 - State Representative Pos. 1
Top 2 had 49.45% of the vote:
  Marcus Riccelli (Prefers Democratic Party): 27.85
  Tim Benn (Prefers G.O.P. Party): 21.60
  Jon Snyder (Prefers Democratic Party): 19.15
  Bob Apple (Prefers Democratic Party): 18.13
  Morgan Oyler (Prefers Republican Party): 13.28
Party share:
  (Prefers Democratic Party): 65.13
  (Prefers G.O.P. Party): 21.60
  (Prefers Republican Party): 13.28

20120807 - Court of Appeals, Division 2, District 2 - Judge Position 2
Top 2 had 44.97% of the vote:
  Pamela (Pam) Loginsky : 26.76
  Thomas Bjorgen : 18.21
  Brendan Williams : 16.57
  Michael Lynch : 14.08
  Jim Foley : 13.81
  Thomas (Tom) E. Weaver, Jr. : 10.57
Party share:
  : 100.00
Top 2 shared same party

20160802 - Lt. Governor
Top 2 had 41.43% of the vote:
  Cyrus Habib (Prefers Democratic Party): 22.26
  Marty McClendon (Prefers Republican Party): 19.17
  Karen Fraser (Prefers Democratic Party): 15.66
  Steve Hobbs (Prefers Democratic Party): 15.29
  Phillip Yin (Prefers Republican Party): 10.70
  Karen Wallace (Prefers Democratic Party): 4.47
  Javier H. Figueroa (Prefers Republican Party): 4.25
  Bill Penor (Prefers Republican Party): 4.00
  Paul Addis (Prefers Libertarian Party): 1.99
  Daniel B. Davies (States No Party Preference): 1.25
  Mark Greene (Prefers Citizens Party): 0.96
Party share:
  (Prefers Democratic Party): 57.68
  (Prefers Republican Party): 38.12
  (Prefers Libertarian Party): 1.99
  (States No Party Preference): 1.25
  (Prefers Citizens Party): 0.96

20160802 - State Treasurer
Top 2 had 48.42% of the vote:
  Duane Davidson (Prefers Republican Party): 25.09
  Michael Waite (Prefers Republican Party): 23.33
  Marko Liias (Prefers Democratic Party): 20.36
  John Paul Comerford (Prefers Democratic Party): 17.97
  Alec Fisken (Prefers Democratic Party): 13.24
Party share:
  (Prefers Democratic Party): 51.57
  (Prefers Republican Party): 48.42
Top 2 shared same party

20160802 - Superintendent of Public Instruction
Top 2 had 46.71% of the vote:
  Erin Jones : 25.76
  Chris Reykdal : 20.95
  Ron Higgins : 16.65
  Robin Fleming : 13.52
  David Spring : 8.52
  John Patterson Blair : 5.59
  KumRoon (Mr. Mak) Maksirisombat : 3.79
  Al Runte : 3.26
  Grazyna Prouty : 1.94
Party share:
  : 99.98
Top 2 shared same party

20180807 - Legislative District 40 - State Representative Pos. 1
Top 2 had 49.22% of the vote:
  Debra Lekanoff (Prefers Democratic Party): 28.19
  Michael Petrish (Prefers Republican Party): 21.03
  Alex Ramel (Prefers Democratic Party): 19.13
  Rud Browne (Prefers Democratic Party): 18.41
  Daniel Miller (Prefers Republican Party): 6.69
  Tom Pasma (Prefers Democratic Party): 6.55
Party share:
  (Prefers Democratic Party): 72.28
  (Prefers Republican Party): 27.72

In 8 of 1004 races (0.80%), top 2 did not have majority share.
In 360 of 1004 races (35.86%), top 2 were of the same party.
```

### Plurality Winners (Top 2 < 50% combined vote)
- **8 out of 1,004 races (0.80%)** had top two candidates who together received less than 50% of the primary vote
- This represents a very small minority of cases where the primary system failed to produce candidates with majority support

### Same-Party General Elections
- **360 out of 1,004 races (35.86%)** had both top two candidates from the same party
- This is a significant portion of races where voters are limited to choosing between candidates of the same party in the general election

### Notable Cases
The most striking example is the **2016 State Treasurer race**:
- Two Republicans advanced to the general election with only 48.42% combined vote share
- Democrats collectively received 51.57% of the vote but were shut out of the general election
- This demonstrates how vote-splitting can prevent the majority party from advancing any candidates

### Implications for Ranked-Choice Voting
If Washington adopted RCV:
- The 8 plurality winner cases would likely produce different outcomes
- Voters could express preferences across multiple candidates
- Vote-splitting effects would be minimized
- The 360 same-party general elections might see more diverse candidate representation

The data suggests that while the Top 2 system generally works well, there are specific cases where RCV could provide more representative outcomes and reduce the impact of vote-splitting.

