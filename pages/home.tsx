import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    // <body id="bodyplus">
    <>
      <div className="rheader">
        <div className="box">
          <div className="left">
            <a className="rclic">
              <b className="icon-bars"></b>
            </a>
          </div>
          <div className="rmenus">
            <ul id="menu-top" className="">
              <li
                id="menu-item-6591"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6591"
              >
                <a href="/">MOVIES</a>
              </li>
              <li
                id="menu-item-6542"
                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-6542"
              >
                <a>GENRES</a>
              </li>
              <li
                id="menu-item-6563"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6563"
              >
                <a>YEARS</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <a className="rclic2">
              <b className="icon-search"></b>
            </a>
          </div>
          <div className="rbuscar">
            <form method="get" id="searchform" action="https://vexmovies.space">
              <div className="textar">
                <input
                  className="buscar"
                  type="text"
                  placeholder="Search.."
                  name="s"
                  id="s"
                  value=""
                />
              </div>
            </form>
          </div>
          <div className="center">
            <a href="https://vexmovies.space/">
              <img src="https://vexmovies.space/logo.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div id="header" className="">
        <div id="cabeza" className="navegador">
          <div className="caja">
            <div className="logo">
              <a href="https://vexmovies.space/">
                <img src="https://vexmovies.space/logo.png" alt="" />
              </a>
            </div>
            <div className="menu"></div>
            <div className="buscaicon">
              <ul>
                <li>
                  <a className="buscaboton">
                    <i className="icon-search"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="usermenuadmin"></div>
          </div>
        </div>
      </div>
      <div id="contenedor">
        <div className="contenido">
          <div className="buscaformulario">
            <form method="get" id="searchform" action="https://vexmovies.space">
              <input
                type="text"
                placeholder="Search.."
                name="s"
                id="s"
                value=""
              />
            </form>
          </div>
          <div className="box">
            <div className="header">
              <div></div>
              <div className="buscador">
                <form
                  method="get"
                  id="searchform"
                  action="https://vexmovies.space"
                >
                  <div className="imputo">
                    <input
                      className="buscar"
                      type="text"
                      placeholder="Search.."
                      name="s"
                      id="s"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="box_item">
              <div className="peliculas">
                <div id="revel2" className="skl">
                  <div className="a">
                    <a className="dod roce cc">
                      <b className="icon-reorder"></b>
                    </a>
                    <div className="menus">
                      <ul id="menu-top-2" className="">
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6591">
                          <a href="/">MOVIES</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-6542">
                          <a>GENRES</a>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6563">
                          <a>YEARS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="b">
                    <form
                      method="get"
                      id="searchform"
                      action="https://vexmovies.space"
                    >
                      <div className="boxs">
                        <input
                          type="text"
                          placeholder="Search.."
                          value=""
                          name="s"
                          id="s"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <h1>Action</h1>
                <div className="item_1 items">
                  <div id="mt-22815" className="item">
                    <a href="https://vexmovies.space/the-northman/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg"
                          alt="The Northman"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-northman/">
                        <span className="tt">The Northman</span>
                        <span className="ttx">
                          Prince Amleth is on the verge of becoming a man when
                          his father is brutally murdered by his uncle, who
                          kidnaps the boy's mother. Two decades later, Amleth is
                          now a Viking who's on a mission to save his mother,
                          kill his uncle and avenge his father.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            <span></span>
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The Northman</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22811" className="item">
                    <a href="https://vexmovies.space/the-lost-city/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/neMZH82Stu91d3iqvLdNQfqPPyl.jpg"
                          alt="The Lost City"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-lost-city/">
                        <span className="tt">The Lost City</span>
                        <span className="ttx">
                          A reclusive romance novelist who was sure nothing
                          could be worse than getting stuck on a book tour with
                          her cover model, until a kidnapping attempt sweeps
                          them both into a cutthroat jungle adventure, proving
                          life can be so much stranger, and more romantic, than
                          any of her paperback fictions.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The Lost City</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22809" className="item">
                    <a href="https://vexmovies.space/ambulance/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg"
                          alt="Ambulance"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/ambulance/">
                        <span className="tt">Ambulance</span>
                        <span className="ttx">
                          Decorated veteran Will Sharp, desperate for money to
                          cover his wife's medical bills, asks for help from his
                          adoptive brother Danny. A charismatic career criminal,
                          Danny instead offers him a score: the biggest bank
                          heist in Los Angeles history: $32 million.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Ambulance</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22807" className="item">
                    <a href="https://vexmovies.space/sonic-hedgehog-2/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
                          alt="Sonic the Hedgehog 2"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/sonic-hedgehog-2/">
                        <span className="tt">Sonic the Hedgehog 2</span>
                        <span className="ttx">
                          After settling in Green Hills, Sonic is eager to prove
                          he has what it takes to be a true hero. His test comes
                          when Dr. Robotnik returns, this time with a new
                          partner, Knuckles, in search for an emerald that has
                          the power to destroy civilizations. Sonic teams up
                          with his own sidekick, Tails, and together they embark
                          on a ...<div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Sonic the Hedgehog 2</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22805" className="item">
                    <a href="https://vexmovies.space/morbius/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/h4WLN3cmEjCsH1fNGRfvGV6IPBX.jpg"
                          alt="Morbius"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/morbius/">
                        <span className="tt">Morbius</span>
                        <span className="ttx">
                          Dangerously ill with a rare blood disorder, and
                          determined to save others suffering his same fate, Dr.
                          Michael Morbius attempts a desperate gamble. What at
                          first appears to be a radical success soon reveals
                          itself to be a remedy potentially worse than the
                          disease.<div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Morbius</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22803" className="item">
                    <a href="https://vexmovies.space/blacklight/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg"
                          alt="Blacklight"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/blacklight/">
                        <span className="tt">Blacklight</span>
                        <span className="ttx">
                          Travis Block is a shadowy Government agent who
                          specializes in removing operatives whose covers have
                          been exposed. He then has to uncover a deadly
                          conspiracy within his own ranks that reaches the
                          highest echelons of power.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Blacklight</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22801" className="item">
                    <a href="https://vexmovies.space/uncharted/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/tlZpSxYuBRoVJBOpUrPdQe9FmFq.jpg"
                          alt="Uncharted"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/uncharted/">
                        <span className="tt">Uncharted</span>
                        <span className="ttx">
                          A young street-smart, Nathan Drake and his
                          wisecracking partner Victor “Sully” Sullivan embark on
                          a dangerous pursuit of “the greatest treasure never
                          found” while also tracking clues that may lead to
                          Nathan’s long-lost brother.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Uncharted</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22797" className="item">
                    <a href="https://vexmovies.space/jackass-forever/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/mlOXyDGxqBGpEmzV9LPQMudMgng.jpg"
                          alt="Jackass Forever"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/jackass-forever/">
                        <span className="tt">Jackass Forever</span>
                        <span className="ttx">
                          Celebrate the joy of a perfectly executed shot to the
                          groin as Johnny Knoxville, Steve-O and the rest of the
                          gang return alongside some newcomers for one final
                          round of hilarious, wildly absurd and often dangerous
                          displays of stunts and comedy.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Jackass Forever</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22795" className="item">
                    <a href="https://vexmovies.space/the-batman/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/74xTEgt7R36Fpooo50r9T25onhq.jpg"
                          alt="The Batman"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-batman/">
                        <span className="tt">The Batman</span>
                        <span className="ttx">
                          In his second year of fighting crime, Batman uncovers
                          corruption in Gotham City that connects to his own
                          family while facing a serial killer known as the
                          Riddler.<div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The Batman</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22793" className="item">
                    <a href="https://vexmovies.space/moonfall/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg"
                          alt="Moonfall"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/moonfall/">
                        <span className="tt">Moonfall</span>
                        <span className="ttx">
                          A mysterious force knocks the moon from its orbit
                          around Earth and sends it hurtling on a collision
                          course with life as we know it.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Moonfall</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22787" className="item">
                    <a href="https://vexmovies.space/spider-man-no-way-home/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                          alt="Spider-Man: No Way Home"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/spider-man-no-way-home/">
                        <span className="tt">Spider-Man: No Way Home</span>
                        <span className="ttx">
                          Peter Parker is unmasked and no longer able to
                          separate his normal life from the high-stakes of being
                          a super-hero. When he asks for help from Doctor
                          Strange the stakes become even more dangerous, forcing
                          him to discover what it truly means to be Spider-Man.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Spider-Man: No Way Home</h2>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <div id="mt-22771" className="item">
                    <a href="https://vexmovies.space/the-kings-man/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/nj5HmHRZsrYQEYYXyAusFv35erP.jpg"
                          alt="The King&#8217;s Man"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-kings-man/">
                        <span className="tt">The King &#8217;s Man</span>
                        <span className="ttx">
                          As a collection of history's worst tyrants and
                          criminal masterminds gather to plot a war to wipe out
                          millions, one man must race against time to stop them.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The King &#8217;s Man</h2>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <div id="mt-22765" className="item">
                    <a href="https://vexmovies.space/the-matrix-resurrections/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/8c4a8kE7PizaGQQnditMmI1xbRp.jpg"
                          alt="The Matrix Resurrections"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-matrix-resurrections/">
                        <span className="tt">The Matrix Resurrections</span>
                        <span className="ttx">
                          Plagued by strange memories, Neo's life takes an
                          unexpected turn when he finds himself back inside the
                          Matrix.<div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The Matrix Resurrections</h2>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <div id="mt-22763" className="item">
                    <a href="https://vexmovies.space/eternals/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"
                          alt="Eternals"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/eternals/">
                        <span className="tt">Eternals</span>
                        <span className="ttx">
                          The Eternals are a team of ancient aliens who have
                          been living on Earth in secret for thousands of years.
                          When an unexpected tragedy forces them out of the
                          shadows, they are forced to reunite against mankind’s
                          most ancient enemy, the Deviants.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Eternals</h2>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <div id="mt-22761" className="item">
                    <a href="https://vexmovies.space/resident-evil-welcome-raccoon-city/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg"
                          alt="Resident Evil: Welcome to Raccoon City"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/resident-evil-welcome-raccoon-city/">
                        <span className="tt">
                          Resident Evil: Welcome to Raccoon City
                        </span>
                        <span className="ttx">
                          Once the booming home of pharmaceutical giant Umbrella
                          Corporation, Raccoon City is now a dying Midwestern
                          town. The company’s exodus left the city a
                          wasteland…with great evil brewing below the surface.
                          When that evil is unleashed, the townspeople are
                          forever…changed…and a small group of survivors must
                          work together to uncover the truth behind Umbrella and
                          make it through the night.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Resident Evil: Welcome to Raccoon City</h2>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <div id="mt-22745" className="item">
                    <a href="https://vexmovies.space/the-last-duel/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg"
                          alt="The Last Duel"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-last-duel/">
                        <span className="tt">The Last Duel</span>
                        <span className="ttx">
                          King Charles VI declares that Knight Jean de Carrouges
                          settle his dispute with his squire, Jacques Le Gris,
                          by challenging him to a duel.
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The Last Duel</h2>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <div id="mt-22743" className="item">
                    <a href="https://vexmovies.space/no-time-die/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"
                          alt="No Time to Die"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/no-time-die/">
                        <span className="tt">No Time to Die</span>
                        <span className="ttx">
                          Bond has left active service and is enjoying a
                          tranquil life in Jamaica. His peace is short-lived
                          when his old friend Felix Leiter from the CIA turns up
                          asking for help. The mission to rescue a kidnapped
                          scientist turns out to be far more treacherous than
                          expected, leading Bond onto the trail of a mysterious
                          villain armed with dangerous new ...
                          <div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>No Time to Die</h2>
                      <span className="year">2021</span>
                    </div>
                  </div>
                  <div id="mt-22738" className="item">
                    <a href="https://vexmovies.space/the-355/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/uQt2dJFMnJmAp9zLAWNfGilK0BW.jpg"
                          alt="The 355"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-355/">
                        <span className="tt">The 355</span>
                        <span className="ttx">
                          A group of top female agents from American, British,
                          Chinese, Columbian and German government agencies are
                          drawn together to try and stop an organization from
                          acquiring a deadly weapon to send the world into
                          chaos.<div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The 355</h2>
                      <span className="year">2022</span>
                    </div>
                  </div>
                  <div id="mt-22721" className="item">
                    <a href="https://vexmovies.space/the-forbidden-kingdom/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/mkrwLBAFHwLnQF8qdhCH0VOQqff.jpg"
                          alt="The Forbidden Kingdom"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/the-forbidden-kingdom/">
                        <span className="tt">The Forbidden Kingdom</span>
                        <span className="ttx">
                          An American teenager who is obsessed with Hong Kong
                          cinema and kung-fu classNameics makes an extraordinary
                          discovery in a Chinatown pawnshop: the legendary stick
                          weapon of the Chinese sage and warrior, the Monkey
                          King. With the lost relic in hand, the teenager
                          unexpectedly finds himself travelling back to ancient
                          China to join a crew of warriors from martial arts
                          lore ...<div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>The Forbidden Kingdom</h2>
                      <span className="year">2008</span>
                    </div>
                  </div>
                  <div id="mt-22705" className="item">
                    <a href="https://vexmovies.space/crocodile-dundee/">
                      <div className="image">
                        <img
                          src="https://image.tmdb.org/t/p/w185/pduPduL1ub5kok3lPYT15ryC9L6.jpg"
                          alt="Crocodile Dundee"
                          width="100%"
                          height="100%"
                        />
                        <span className="player"></span>
                        <span className="imdb">
                          <b>
                            <b className="icon-star"></b>
                          </b>
                        </span>
                      </div>
                    </a>
                    <div className="boxinfo">
                      <a href="https://vexmovies.space/crocodile-dundee/">
                        <span className="tt">Crocodile Dundee</span>
                        <span className="ttx">
                          When a New York reporter plucks crocodile hunter
                          Dundee from the Australian Outback for a visit to the
                          Big Apple, it's a clash of cultures and a recipe for
                          good-natured comedy as naïve Dundee negotiates the
                          concrete jungle. Dundee proves that his instincts are
                          quite useful in the city and adeptly handles
                          everything from wily muggers to high-society snoots
                          without ...<div className="degradado"></div>
                        </span>
                      </a>
                      <div className="cocs imdb_r">
                        <div className="a">
                          <span className="imdbs"></span>
                        </div>
                        <div className="b">
                          <div className="bar">
                            {/* <span style="width: 0%"></span> */}
                          </div>
                          <span className="dato">
                            IMDB: <b>/10</b>
                            <b>votes</b>
                          </span>
                        </div>
                      </div>
                      <div className="typepost">movie</div>
                    </div>
                    <div className="fixyear">
                      <h2>Crocodile Dundee</h2>
                      <span className="year">1986</span>
                    </div>
                  </div>
                  <div id="paginador">
                    <div className="paginado">
                      <ul>
                        <li className="dd">
                          <a className="current">1</a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            className="page larger"
                            href="https://vexmovies.space/category/action/page/2/"
                          >
                            2
                          </a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            className="page larger"
                            href="https://vexmovies.space/category/action/page/3/"
                          >
                            3
                          </a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            className="previouspostslink"
                            href="https://vexmovies.space/category/action/page/51/"
                          >
                            Last
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="respo_pag">
                    <div className="pag_a"></div>
                    <div className="pag_b">
                      <a href="https://vexmovies.space/category/action/page/2/">
                        Next
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lateral">
                <div id="fixer">
                  <div id="moviehome" style={{ display: 'block' }}>
                    <div className="categorias">
                      <h3>
                        Genres <span className="icon-sort"></span>
                      </h3>
                      <ul className="scrolling cat">
                        <li className="cat-item cat-item-14418 current-cat">
                          <a
                            aria-current="page"
                            href="https://vexmovies.space/category/action/"
                          >
                            Action
                          </a>{' '}
                          <span>1,014</span>
                        </li>
                        <li className="cat-item cat-item-14410">
                          <a href="https://vexmovies.space/category/adventure/">
                            Adventure
                          </a>{' '}
                          <span>711</span>
                        </li>
                        <li className="cat-item cat-item-14411">
                          <a href="https://vexmovies.space/category/animation/">
                            Animation
                          </a>{' '}
                          <span>270</span>
                        </li>
                        <li className="cat-item cat-item-14412">
                          <a href="https://vexmovies.space/category/comedy/">
                            Comedy
                          </a>{' '}
                          <span>1,000</span>
                        </li>
                        <li className="cat-item cat-item-14420">
                          <a href="https://vexmovies.space/category/crime/">
                            Crime
                          </a>{' '}
                          <span>554</span>
                        </li>
                        <li className="cat-item cat-item-14421">
                          <a href="https://vexmovies.space/category/documentary/">
                            Documentary
                          </a>{' '}
                          <span>49</span>
                        </li>
                        <li className="cat-item cat-item-14415">
                          <a href="https://vexmovies.space/category/drama/">
                            Drama
                          </a>{' '}
                          <span>1,610</span>
                        </li>
                        <li className="cat-item cat-item-14413">
                          <a href="https://vexmovies.space/category/family/">
                            Family
                          </a>{' '}
                          <span>335</span>
                        </li>
                        <li className="cat-item cat-item-14414">
                          <a href="https://vexmovies.space/category/fantasy/">
                            Fantasy
                          </a>{' '}
                          <span>377</span>
                        </li>
                        <li className="cat-item cat-item-15731">
                          <a href="https://vexmovies.space/category/history/">
                            History
                          </a>{' '}
                          <span>116</span>
                        </li>
                        <li className="cat-item cat-item-14423">
                          <a href="https://vexmovies.space/category/horror/">
                            Horror
                          </a>{' '}
                          <span>541</span>
                        </li>
                        <li className="cat-item cat-item-26466">
                          <a href="https://vexmovies.space/category/music/">
                            Music
                          </a>{' '}
                          <span>106</span>
                        </li>
                        <li className="cat-item cat-item-14425">
                          <a href="https://vexmovies.space/category/mystery/">
                            Mystery
                          </a>{' '}
                          <span>331</span>
                        </li>
                        <li className="cat-item cat-item-14426">
                          <a href="https://vexmovies.space/category/romance/">
                            Romance
                          </a>{' '}
                          <span>468</span>
                        </li>
                        <li className="cat-item cat-item-14416">
                          <a href="https://vexmovies.space/category/science-fiction/">
                            Science Fiction
                          </a>{' '}
                          <span>413</span>
                        </li>
                        <li className="cat-item cat-item-14417">
                          <a href="https://vexmovies.space/category/thriller/">
                            Thriller
                          </a>{' '}
                          <span>951</span>
                        </li>
                        <li className="cat-item cat-item-28395">
                          <a href="https://vexmovies.space/category/tv-movie/">
                            TV Movie
                          </a>{' '}
                          <span>21</span>
                        </li>
                        <li className="cat-item cat-item-1">
                          <a href="https://vexmovies.space/category/uncategorized/">
                            Uncategorized
                          </a>{' '}
                          <span>0</span>
                        </li>
                        <li className="cat-item cat-item-14428">
                          <a href="https://vexmovies.space/category/war/">
                            War
                          </a>{' '}
                          <span>72</span>
                        </li>
                        <li className="cat-item cat-item-14429">
                          <a href="https://vexmovies.space/category/western/">
                            Western
                          </a>{' '}
                          <span>36</span>
                        </li>
                      </ul>
                    </div>

                    <div className="filtro_y">
                      <h3>
                        Release year <span className="icon-sort"></span>
                      </h3>
                      <ul className="scrolling">
                        <li>
                          <a href="https://vexmovies.space/release-year/2022/">
                            2022
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2021/">
                            2021
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2020/">
                            2020
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2019/">
                            2019
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2018/">
                            2018
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2017/">
                            2017
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2016/">
                            2016
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2015/">
                            2015
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2014/">
                            2014
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2013/">
                            2013
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2012/">
                            2012
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2011/">
                            2011
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2010/">
                            2010
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2009/">
                            2009
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2008/">
                            2008
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2007/">
                            2007
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2006/">
                            2006
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2005/">
                            2005
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2004/">
                            2004
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2003/">
                            2003
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2002/">
                            2002
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2001/">
                            2001
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/2000/">
                            2000
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1999/">
                            1999
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1998/">
                            1998
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1997/">
                            1997
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1996/">
                            1996
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1995/">
                            1995
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1994/">
                            1994
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1993/">
                            1993
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1992/">
                            1992
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1991/">
                            1991
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1990/">
                            1990
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1989/">
                            1989
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1988/">
                            1988
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1987/">
                            1987
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1986/">
                            1986
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1985/">
                            1985
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1984/">
                            1984
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1983/">
                            1983
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1982/">
                            1982
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1979/">
                            1979
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1978/">
                            1978
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1977/">
                            1977
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1976/">
                            1976
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1974/">
                            1974
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1973/">
                            1973
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1972/">
                            1972
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1971/">
                            1971
                          </a>
                        </li>
                        <li>
                          <a href="https://vexmovies.space/release-year/1970/">
                            1970
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="filtro_y">
                    <h3>
                      Quality <span className="icon-sort"></span>
                    </h3>
                    <ul
                      className="scrolling"
                      style={{ maxHeight: '87px' }}
                    ></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="footer" className="">
            <span className="texto">
              <b></b> &copy; 2022 All rights reserved
            </span>
            <span className="copyright">
              Vexmovies - Watch Movies Online Free
            </span>
          </div>
        </div>
      </div>
      {/* </body> */}
    </>
  );
};

export default Home;
