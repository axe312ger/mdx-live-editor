import React, { Component } from 'react'
import './App.css'

import EasyMDE from 'easymde'
import 'easymde/dist/easymde.min.css'
import MDX from '@mdx-js/runtime'
import { renderToStaticMarkup } from 'react-dom/server'

import Grid from './mdx/Grid'

export default class App extends Component {
  componentDidMount() {
    this.easymde = new EasyMDE({
      autoDownloadFontAwesome: true,
      forceSync: true,
      autofocus: true,
      indentWithTabs: false,
      spellChecker: false,
      previewRender: (plainText, preview) => {
        setTimeout(async () => {
          const components = {
            // eslint-disable-next-line
            h1: props => <h1 style={{ color: 'tomato' }} {...props} />
          }
          const scope = {
            Demo: props => <h1>This is a demo component</h1>,
            Grid
          }
          try {
            preview.innerHTML = renderToStaticMarkup(
              <MDX components={components} scope={scope}>
                {plainText}
              </MDX>
            )
          } catch (err) {
            console.error(err)
            preview.innerHTML = renderToStaticMarkup(
              <>
                <h1>{err.name}</h1>
                <p>{err.message}</p>
              </>
            )
          }
        })
        return preview.innerHTML
      },
      toolbar: [
        'heading-1',
        'heading-2',
        'heading-3',
        '|',
        'bold',
        'italic',
        'link',
        'image',
        '|',
        'quote',
        'unordered-list',
        'ordered-list',
        '|',
        'preview',
        'side-by-side',
        'fullscreen'
      ]
    })
    this.easymde.toggleSideBySide()
  }

  render() {
    return (
      <div id="app">
        <textarea
          id="editor"
          defaultValue={`# MDX Live Editor

* Based on [EasyMDE](https://github.com/Ionaru/easy-markdown-editor) and [MDX Runtime](https://mdxjs.com/advanced/runtime/)

## Example Component

Displays any content next to each other. Works best with 🐈

<Grid>

  ![](http://lorempixel.com/200/300/cats/1)

  ![](http://lorempixel.com/200/300/cats/2)

  ![](http://lorempixel.com/200/300/cats/3)

</Grid>

## Just some demo content

Lorem markdownum accepere habeto Hellespontus mater sidus **ab pollice**! Non
ante natalis metuendus, litore arma ambiguo adspicit matres gravis mollem
trabibus procorum, manu. Erat arguitur. Patrios in habitat moenibus labra
membraque heros mille somnus perempto genitor promittit ramis, suspiratibus
gratia Arctos. Me nec.

Ignis Ulixes penatigero utramque gente exstante. Novis Capitolia o nubibus
simul, retia facta *Phaethon littera*; quod! Et hoc caelum mutatus et linguae
studiisque anhelis [tenet](http://erat.com/arida).

    device(bitmap_web_wi - activexBsodVideo);
    if (clip) {
        openSoftwareHypermedia(serverModem);
        systemPaperRefresh.ataPoint(4, adwareCard);
    } else {
        barUnc /= 510214 * iscsiDataE;
        http = rt;
        richRosetta -= gpu.remoteWeb(packet_access, cd_tweak_expansion) +
                heuristic * cable;
    }
    piconet(asp_windows_drive - 933919, 4);

[Ferro deponere](http://www.iovis-potentia.org/ora.aspx) caluere ne Thescelus
nemus vultus relatis fictos sub abstulit? **Spectent proles**, diu tulit, quid
est; lumina illa cognoscenti mensae processit nescio! Spuma imitamine Io grande
acerno, heu edidit turbarat nomenque verbisque coniunx, adeunt! Quis dare cursu,
tantum boumque, infirmis.

## Robora et possim nec natum iusta

Capillis secreta terga, adsidua numquam: Atridae sanguis, micant omnia,
concipias secreta signatum **spectans diffusum**? Tantum Romuleae pavens
clamavit erat insequitur fameque petis nec tui. Alii orbem Dianae, tibi tectus
cadunt occidit medioque, ad consedit. Omne tulit vires post robore poplite. Est
Cycno parte rex *socerum* cumque fusus excussit, sic quam similisque, ignes
[vota](http://qualem-quae.com/somnus.html), et nec.

    if (5) {
        linuxDomainBalancing += domain;
        nanometer.windowsCodeHorizontal(3);
        ebookIcmpPum /= e / -3 + multimedia;
    } else {
        realityCookieJava += ddrRwExcel(warmUsername, ocrPeripheral);
        asp_right *= directory.file(partition_pad + tftp_duplex, 5,
                rawDesktopSyn);
    }
    if (table / command_cold >= slaSpeakersInbox) {
        degaussSync(property_radcab, vector, soapThread.ansi.web(
                video_printer_tiger));
        archie_design = spamMetalOsi;
    } else {
        subdirectoryXml += ppm(streaming_rw) + certificate;
        ivr.and.file(lifo);
        commerce_disk_transistor += supply(bitDegauss);
    }
    var textAsciiSystem = 3;
    cellAix.plain(kibibyteSsid(drag, macUltra), phreaking);
    hardOsdDll.leafModelInterpreter -= 5 - outputLogicIp * system * jfs;

Auras eget Amphitrite procul numeroque dumque illi unius capillos fertur:
inserit agros minas. Quoque glaebis loquiturque furori in Orphea, se non
ignipedum tendens aere umbra sumpto, *saucius*. Pone loco draconis morsu
festumque referre ille simul adstitit et Coeranon? **Prospicientis graves**
nomen, sanguineae annos fratre regina, per tutae spectari aether anne, ad?

> Nate pollice noctis [quam](http://ea.io/), natantia est expulit puerilibus,
> ora! Diemque tale mittentis inque pugnantem turpius, alte qui terraeque sentit
> gaudere bisque, inulta. Me ego cum est *tacui* laqueoque: nutrix ventoque:
> postquam: est primoque viasque terris. Quamquam foedera est lumen cicatrix vix
> mensam vivacis in [iubet](http://proceresmeruit.org/), et iacit sacrarunt.

Dum more saecula ab rotarum isdem ille relinquunt admovit prolem. Quae pectora
reperta, aut fugis gratia tabellas paterno, illa excidit? Sanguinis *in* pavida
si cupit respicit aris membra pedibusque cruorem veluti sub certe quam parentis,
vulnere spatiantes oculi adstitit.
`}
        />
      </div>
    )
  }
}
