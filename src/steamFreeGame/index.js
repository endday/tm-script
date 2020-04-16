// 1、首先登录网页版Steam 账号。 https://store.steampowered.com/
// 2、点击
// 右上角自己账号-----账户明细——许可和产品序列号激活—— 右键页面空白（检查元素）——控制台（Console）——右键粘贴（分割线下代码全复制）——回车

(function () {

  if (location.href.match(/^https:\/\/store\.steampowered\.com\/account\/licenses\/?$/) === null) {
    alert('请在Steam帐号明细页面运行这些代码: Login')
    window.location = 'https://store.steampowered.com/account/licenses/'
    return
  }

  var freePackages = [
    //本体
    39166,//Heroine's Quest: The Herald of Ragnarok
    13261,//RACE 07: Andy Priaulx Crowne Plaza Raceway
    32032,//Portal 2 Sixense Perceptual Pack
    59373,//Penumbra: Necrologue
    33694,//Grimm&Episode 1 - A Boy Learns What Fear Is
    88162,//Romance of the Three Kingdoms Maker
    36561,//Serena
    58514,//Voxelized
    117526,//Amnesia: Final Revelations
    //dlc
    85604,//RTK Maker - Face CG “RTK13” Set / 三国志ツクール顔登録素材 『三國志13』セット+シナリオ
    21478,//Free to Play免费本体
    50861,//Free to Play Soundtrack
    21473,//Prime World免费本体
    31538,//Prime World - Prime Machine
    32287,//Z3TA+ 2 - Polybius 8-bit Game Pack
    38085,//Saints Row IV - Reverse Cosplay Pack
    72261,//The Secret of Tremendous Corporation免费本体
    81026,//The Sources of Tremendous Corporation
    47333,//Aura Kingdom免费本体
    38820,//Aura Kingdom - Winter Gift
    69802,//Fuse免费本体
    60341,//Fuse - Free Brute Character Pack
    21416,//Elsword免费本体
    63207,//Time Tracer's DLC Package
    59253,//Vindictus - New User Package
    //软件&工具
    35063,//Star Swarm Stress Test
    74465//Arma 3 Samples
  ]

  var ownedPackages = {}

  jQuery('.account_table a').each(function (i, el) {
    var match = el.href.match(/javascript:RemoveFreeLicense\( ([0-9]+), '/)
    if (match !== null) {
      ownedPackages[+match[1]] = true
    }
  })

  let i = 0
  let loaded = 0
  let package = 0
  let total = freePackages.length

  var modal = ShowBlockingWaitDialog('努力执行中...', '请耐心等待，如果有错误请无视，请耐心等待脚本加载完毕')
  for (; i < total; i++) {
    package = freePackages[i]
    if (ownedPackages[package]) {
      loaded++
      continue
    }

    jQuery.post('//store.steampowered.com/checkout/addfreelicense', {
      action: 'add_to_cart',
      sessionid: g_sessionID,
      subid: package
    }).always(function () {
        loaded++
        modal.Dismiss()
        if (loaded >= total) {
          location.reload()
        } else {
          modal = ShowBlockingWaitDialog('执行中...',
            '加载至 <b>' + loaded + '</b>/' + total + '.')
        }
      }
    )
  }
}())
