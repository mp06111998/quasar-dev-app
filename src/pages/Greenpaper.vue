<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
  />
  <q-page class="flex flex-center" style="background-color: lightgrey">
    <div
      style="
        background-color: white;
        margin: 5% 10% 5% 10%;
        padding: 0% 10% 5% 10%;
        text-align: justify !important;
      "
    >
      <h4><b>Greenpaper</b></h4>

      <div style="font-size: 22px">
        <b>Surebets as the key to success in betting</b>
      </div>
      <div>
        We help thousands of our clients gain an advantage over bookmakers and
        earn a stable income on sports betting.<br /><br />
      </div>

      <div style="font-size: 22px">
        <b>How it works</b>
      </div>
      <div>
        The service we created allows you to bet without risk: you earn money
        despite the outcome of a sporting event. Is this really possible? Yes,
        through the use of surebets*, which are calculated using elementary
        mathematical formulas.<br /><br />
        *Surebets – mathematically calculated arbitrage situations that are
        formed due to the difference in the bookmakers' odds and allow you to
        place bets on all the opposite outcomes of the event in different
        bookmakers so that you get a profit at any outcome of the match!<br /><br />
      </div>

      <div style="font-size: 22px">
        <b>The reasons for arbitrage situation appearance</b>
      </div>
      <div>
        1. Overstated odds as a result of bookmakers competition.
        <br /><br />
        2. Bookmakers cannot keep the track of each other and give different
        odds.
        <br /><br />
        3. Bookmaker mistakes that lead to false odds calculation.
        <br /><br />
        Our surebet service scans such odds and, afterwards, makes all the
        necessary calculations by means of mathematical formulas and informs you
        what and how much to bet on to get a safe profit.
        <br /><br />
      </div>

      <div style="font-size: 22px">
        <b>Surebet types</b>
      </div>
      <div>
        Surebets are typically distinguished by the number of outcomes (2way,
        3way, multiway) and by the start time of the competition (prematch,
        live).
        <br /><br />
        Prematch surebets usually appear in the upcoming competitions because of
        the odds difference between the bookmakers. Live surebets appear for the
        same reason, only in live events. And both of the types have their pros
        and cons.
        <br /><br />
        Among the major benefits of prematch are low odds change and simple
        workflow. Shortcomings include smaller return and slow turnover.
        <br /><br />
        Live bets are much more attractive with higher return and low risk,
        which makes them inappropriate for newbies owing to fast odds change and
        short lifespan respectively.
        <br /><br />
      </div>

      <div style="font-size: 22px">
        <b>Bookmakers</b>
      </div>
      <div>
        List of bookmakers that platform performs bets on:
        <br /><br />
        <table>
          <tr>
            <th>Bookmaker</th>
            <th>Country</th>
            <th v-if="!$q.screen.lt.md">Odds</th>
            <th v-if="!$q.screen.lt.md">Arbs quantity</th>
            <th v-if="!$q.screen.lt.md">Loyalty</th>
          </tr>
          <tr>
            <td>10bet</td>
            <td>Great Britain</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>188bet</td>
            <td>Global</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>1xbet</td>
            <td>Russia</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>888Sport</td>
            <td>Global</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Bet365</td>
            <td>Great Britain</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>BetAtHome</td>
            <td>Austria</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model2"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Betcity</td>
            <td>Russia</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Betfair</td>
            <td>Great Britain</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Betflag</td>
            <td>Italy</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Betfred</td>
            <td>Great Britain</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model2"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>BetinAsia</td>
            <td>Global</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>BetOnline</td>
            <td>Global</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model1"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Betsson</td>
            <td>Greece</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model2"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Bwin</td>
            <td>Global</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Rfbet</td>
            <td>Bulgaria</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Eurobet</td>
            <td>Italy</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Favbet</td>
            <td>Ukraine</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Fonbet</td>
            <td>Greece</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Fortuna</td>
            <td>Slovakia</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>ImSports</td>
            <td>China</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>OddSet</td>
            <td>Germany</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model1"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Pinnacle</td>
            <td>Global</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Smarkets</td>
            <td>Great Britain</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model2"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model5"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Unibet</td>
            <td>Global</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>WilliamHill</td>
            <td>Great Britain</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Winlinebet</td>
            <td>Russia</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model4"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
          <tr>
            <td>Wplay</td>
            <td>Colombia</td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
            <td v-if="!$q.screen.lt.md">
              <q-rating
                v-model="model3"
                color="green"
                readonly
                icon="star_border"
                icon-selected="star"
              />
            </td>
          </tr>
        </table>
        <br />
      </div>

      <div style="font-size: 22px">
        <b>Surebet example</b>
      </div>
      <div>
        We have two basketball teams: Leicester Warriors and Westminster
        Warriors. There is a huge variety of bookmakers presenting various odds
        for Team1 and Team2 to win. By means of specially developed scanning
        technology our surebet service made the following steps:
        <br /><br />
        1. It scanned all the odds of Leicester Warriors – Westminster Warriors
        with more than 100 bookies.
        <br /><br />
        2. It defined the best odds by means of simple mathematical reckoning.
        <br /><br />
        3. It found and picked out the most beneficial surebets online for you
        to bet.
        <br /><br />
        Let's assume that having scanned all the bookies for Leicester Warriors
        – Westminster Warriors competition, the scanner selected bookmakers with
        following odds
        <br /><br />
        <table>
          <tr>
            <th>Leicester Warriors</th>
            <th>Bookmaker</th>
            <th>Westminster Wariors</th>
          </tr>
          <tr>
            <td>1.25</td>
            <td>B1</td>
            <td>3.9</td>
          </tr>
          <tr>
            <td>1.43</td>
            <td>B2</td>
            <td>2.85</td>
          </tr>
        </table>
        <br />
        Define inversion (L) for all the bookmaker results:
        <b><i>B1: L = 1/1.25 + 1/3.9 = 1.056</i></b> and
        <b><i>B2: L = 1/1.43 + 1/2.85 = 1.051</i></b> <br /><br />
      </div>
      Accordingly, B1 counts on 5.6% of profit, and B2 – 5.1% under any outcome.
      Our aim is to define the odds in the way the inversion of opposing results
      to be less than 1. Only under such circumstances the surebet succeeds:
      <br /><br />

      <div style="font-size: 16px"><b>1. Inversion (L)</b></div>
      <div>
        Inversion (L) for B1 and B2. Imagine B1 bets on the win of Leicester
        Warrior, and B2 – on Westminster Warriors:
        <b><i>L = 1/3.9 + 1/1.43 = 0.9557</i></b> <br /><br />
        As you may see, inversion for the opposing bets is less than 1, thus,
        both bookmakers are suitable for our further reckoning.<br /><br />
      </div>
      <div style="font-size: 16px"><b>2. Bet calculation</b></div>
      <div>
        For instance, we have €1000. The bets for B1 (V1) and B2 (V2) are the
        following: <b><i>V1 = 1000/(0.9557*3.9) = €268.30</i></b> and
        <b><i>V2 = 1000/(0.9557*1.43) = €731.70</i></b> <br /><br />
        Consequently, we have to place €268.30 on the win of Leicester Warrior
        (B1) and €731.70 on Westminster Warriors (B2) to get safe profit.<br /><br />
      </div>
      <div style="font-size: 16px"><b>3. Net profit (P)</b></div>
      <div>
        Net profit (P) from the total sum wagered:<br /><br />
        In case Leicester Warriors wins:
        <b><i>P = 268.30 x 3.9 - (268.30 + 731.70) = €46.33</i></b> <br /><br />
        In case Westminster Warriors wins:
        <b><i>P = 731.70 x 1.43 - (268.30 + 731.70) = €46.33</i></b>
        <br /><br />
        We get €1046.33 from our total sum wagered (€1000) no matter the
        outcome. Net profit is €46.33 or 4.42% from the sum wagered.
        <br /><br />
        And now imagine you're doing this so many times a day with sums way
        higher than in the example. Right, you can earn a pretty penny! That's
        how Juicy Gain Platform works.
        <br /><br />
      </div>
      <div style="font-size: 22px">
        <b>Juicy Gain's Role</b>
      </div>
      <div>
        Juicy Gain Platform is designed to place those surebets for you in
        background, it works as middleman between bookmakers and investor. You
        don't even see any sport bets on platform. On platform you just choose
        investment plan and wait for it to complete.<br /><br />
        Congrats! You earned your first money.<br /><br />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { computed } from "vue";

export default defineComponent({
  name: "Greenpaper",

  data() {
    return {
      test: true,
      model1: 1,
      model2: 2,
      model3: 3,
      model4: 4,
      model5: 5,
    };
  },

  methods: {
    printamo() {
      return this.test;
    },
  },

  setup() {
    const $q = useQuasar();
    const buttonColor = computed(() => {
      return $q.screen.lt.md ? true : false;
    });

    return { buttonColor };
  },
});
</script>

<style>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~assets/background.jpg);
  background-size: cover;
}

.bg-logo {
  background-image: linear-gradient(
      rgb(255, 255, 255, 0.97),
      rgba(255, 255, 255, 0.97)
    ),
    url(~assets/log.jpg);
  background-size: cover;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
