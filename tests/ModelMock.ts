import { IModel } from "../src/IModel";
import { LabeledFaceDescriptors } from "face-api.js";

export default class ModelMock implements IModel {
  getDescriptors(): LabeledFaceDescriptors[] {
    return [
      new LabeledFaceDescriptors(
        "Dwayne Johnson",
        [
          [
            -0.11100232601165771,
            0.14226359128952026,
            0.09768524020910263,
            -0.06485741585493088,
            -0.10416407883167267,
            -0.029709026217460632,
            -0.011904269456863403,
            -0.020039629191160202,
            0.19224217534065247,
            -0.032940398901700974,
            0.23338912427425385,
            0.02244529128074646,
            -0.20282933115959167,
            -0.11494865268468857,
            0.08371029794216156,
            0.10229676216840744,
            -0.22067855298519135,
            -0.13115611672401428,
            -0.06003015860915184,
            -0.07461563497781754,
            0.06510426104068756,
            0.0013407990336418152,
            0.06026432663202286,
            0.033634476363658905,
            -0.17446857690811157,
            -0.33241716027259827,
            -0.07781323790550232,
            -0.19526898860931396,
            0.16542504727840424,
            -0.16155816614627838,
            -0.0020873714238405228,
            -0.08754057437181473,
            -0.19913190603256226,
            -0.08297611773014069,
            -0.0475710928440094,
            0.046372611075639725,
            -0.0021888352930545807,
            -0.1536703258752823,
            0.19379207491874695,
            -0.05319678783416748,
            -0.16733741760253906,
            -0.06332976371049881,
            -0.043355055153369904,
            0.18766334652900696,
            0.11438626050949097,
            -0.01600293628871441,
            0.09994719177484512,
            -0.001507595181465149,
            0.027400441467761993,
            -0.1619648039340973,
            0.11497297137975693,
            0.1585947871208191,
            0.09227138757705688,
            0.06894302368164062,
            0.05018668621778488,
            -0.19099979102611542,
            0.04789498820900917,
            0.19688042998313904,
            -0.18158935010433197,
            0.06243367865681648,
            0.10337866097688675,
            -0.01143376063555479,
            -0.01454670075327158,
            0.02239338308572769,
            0.26119086146354675,
            0.08654321730136871,
            -0.10475333780050278,
            -0.14378800988197327,
            0.1138538345694542,
            -0.08052580058574677,
            -0.04412766173481941,
            0.04640192911028862,
            -0.15555578470230103,
            -0.11132264882326126,
            -0.265097051858902,
            0.055870503187179565,
            0.36075952649116516,
            0.11512164026498795,
            -0.2654779553413391,
            -0.034222863614559174,
            -0.20636650919914246,
            0.04009164124727249,
            0.05437805876135826,
            0.05642388015985489,
            -0.07412489503622055,
            -0.00302094966173172,
            -0.17790110409259796,
            -0.008124209940433502,
            0.11048189550638199,
            0.025240644812583923,
            -0.01945725455880165,
            0.15214556455612183,
            0.03796308487653732,
            -0.02963910810649395,
            0.02005777135491371,
            0.004675455391407013,
            -0.1365390419960022,
            -0.04160485416650772,
            -0.011837296187877655,
            -0.037292007356882095,
            0.06538892537355423,
            -0.07580836117267609,
            -0.0958564430475235,
            0.17362135648727417,
            -0.2037729173898697,
            0.1508750021457672,
            0.030522938817739487,
            -0.04693476855754852,
            -0.023296330124139786,
            0.024465013295412064,
            -0.045056749135255814,
            -0.07992405444383621,
            0.15851424634456635,
            -0.22488150000572205,
            0.19973331689834595,
            0.24084332585334778,
            -0.006117161363363266,
            0.1840822845697403,
            0.04039965569972992,
            0.11478106677532196,
            -0.05874808877706528,
            -0.007285460829734802,
            -0.16889020800590515,
            -0.04457119107246399,
            0.004189241677522659,
            -0.04604308307170868,
            0.051919303834438324,
            0.03671645000576973
          ],
          [
            -0.0566859170794487,
            0.15760916471481323,
            0.10566890984773636,
            -0.05696497857570648,
            -0.0694604218006134,
            0.015656080096960068,
            -0.051045577973127365,
            -0.10667125880718231,
            0.15622608363628387,
            -0.07034113258123398,
            0.2850537896156311,
            0.013639889657497406,
            -0.1932668685913086,
            -0.07601243257522583,
            0.08716432005167007,
            0.13069629669189453,
            -0.2313297688961029,
            -0.11988291144371033,
            -0.1551629602909088,
            -0.042659372091293335,
            0.0026886984705924988,
            0.003071185201406479,
            0.09139009565114975,
            0.024139709770679474,
            -0.11417786777019501,
            -0.37938192486763,
            -0.05657811090350151,
            -0.13071250915527344,
            0.07752659916877747,
            -0.16148783266544342,
            -0.0137336952611804,
            -0.11356525123119354,
            -0.23515363037586212,
            -0.026441216468811035,
            0.00013141706585884094,
            0.07437676191329956,
            -0.06537196785211563,
            -0.07852602750062943,
            0.1691657453775406,
            -0.01911415159702301,
            -0.2293311059474945,
            0.05034700036048889,
            -0.052869055420160294,
            0.17042626440525055,
            0.2058650255203247,
            0.03577422723174095,
            0.02193206548690796,
            -0.06341461837291718,
            0.06637422740459442,
            -0.19492679834365845,
            0.1054348573088646,
            0.13012981414794922,
            0.09963853657245636,
            0.049854181706905365,
            0.0664699524641037,
            -0.159290611743927,
            -0.0049634091556072235,
            0.18299061059951782,
            -0.16265138983726501,
            0.03356844186782837,
            0.11021104454994202,
            -0.09016753733158112,
            -0.025200290605425835,
            -0.006814010441303253,
            0.24806590378284454,
            0.20268554985523224,
            -0.1369122862815857,
            -0.2061920315027237,
            0.06540892273187637,
            -0.09907905757427216,
            -0.08240118622779846,
            0.07754112780094147,
            -0.10409612208604813,
            -0.11108378320932388,
            -0.29523080587387085,
            -0.016986127942800522,
            0.37539729475975037,
            0.03132329136133194,
            -0.2984158396720886,
            -0.10915552079677582,
            -0.1471782624721527,
            0.0617392361164093,
            0.06915216147899628,
            0.07725715637207031,
            -0.08177708089351654,
            -0.006527148187160492,
            -0.13914664089679718,
            -0.008699629455804825,
            0.15207433700561523,
            0.016679689288139343,
            -0.06251418590545654,
            0.19144082069396973,
            -0.0666906088590622,
            0.028021108359098434,
            0.019209833815693855,
            0.03215324878692627,
            -0.12046691030263901,
            -0.024239517748355865,
            -0.07678689062595367,
            -0.06824715435504913,
            0.013922076672315598,
            -0.025127507746219635,
            -0.07413502037525177,
            0.1294781118631363,
            -0.2012566477060318,
            0.18688662350177765,
            -0.024197310209274292,
            0.01551082730293274,
            0.03225819393992424,
            0.008016608655452728,
            -0.036097824573516846,
            -0.014601007103919983,
            0.16379553079605103,
            -0.31300637125968933,
            0.28501778841018677,
            0.22677063941955566,
            -0.0152345672249794,
            0.10749392956495285,
            0.04655790328979492,
            0.05332295224070549,
            -0.06820401549339294,
            0.010296281427145004,
            -0.2391413152217865,
            -0.04438938945531845,
            -0.007209006696939468,
            -0.04545203223824501,
            0.0834198147058487,
            -0.001965263858437538
          ]
        ].map(arr => new Float32Array(arr))
      )
    ];
  }
  setDescriptors(descriptors: LabeledFaceDescriptors[]): void {}
}
