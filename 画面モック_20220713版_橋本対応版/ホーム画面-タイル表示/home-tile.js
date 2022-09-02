// サンプルデータ
const SAMPLES = [
  { "name": "秋田 次生", "select": "true" },
  { "name": "秋田 照也", "oshirase": "保", "oshirase_label": "～4/30", "select": "true" },
  { "name": "足立 繁造", "oshirase": "短", "oshirase_label": "～5/31" },
  { "name": "天野 慎治" },
  { "name": "荒井 保行", "oshirase_label": "申請中" },
  { "name": "池上 康三" },
  { "name": "石塚 秋徳" },
  { "name": "大野 茂平", "nintei": "支2" },
  { "name": "奥野 正次" },
  { "name": "亀井 美紀", "avatar": "../icons/avatar-female.svg" },
  { "name": "川原 邦江", "avatar": "../icons/avatar-female.svg" },
  { "name": "岸 利恵", "avatar": "../icons/avatar-female.svg" },
  { "name": "木村 信弥" },
  { "name": "黒木 知美", "avatar": "../icons/avatar-female.svg" },
  { "name": "小西 孝敏" },
  { "name": "関口 理香", "avatar": "../icons/avatar-female.svg" },
  { "name": "関根 裕紀" },
  { "name": "大崎 次生" },
  { "name": "高橋 結衣", "avatar": "../icons/avatar-female.svg" },
  { "name": "田村 宏侑" },
  { "name": "塚本 松次郎" },
  { "name": "長沢 雅近" },
  { "name": "福岡 兼典", "avatar": "../icons/avatar-female.svg" },
  { "name": "福原 重文" },
  { "name": "藤田 初美", "avatar": "../icons/avatar-female.svg" },
  { "name": "古谷 嘉彦" },
  { "name": "星 礼子", "avatar": "../icons/avatar-female.svg" },
  { "name": "堀田 克明" },
  { "name": "堀江 菊治" },
  { "name": "町田 初" },
  { "name": "松永 三保子", "avatar": "../icons/avatar-female.svg" },
  { "name": "松山 淳子", "avatar": "../icons/avatar-female.svg" },
  { "name": "三上 真志" },
  { "name": "水野 弘春" },
  { "name": "宮下 真由美", "avatar": "../icons/avatar-female.svg" },
  { "name": "森下 則昭" },
  { "name": "山岸 心一" },
  { "name": "山下 茂平" },
  { "name": "吉岡 敬正" },
  { "name": "吉田 麻樹", "avatar": "../icons/avatar-female.svg" }
];

function initSamples() {
  // 要素の複製
  const item = document.querySelector('.himawari-card');
  for (let i = 1; i < SAMPLES.length; i++) {
    const newItem = item.cloneNode(true);
    item.parentNode.appendChild(newItem);
  }

  // サンプルデータ反映
  const cards = document.querySelectorAll('.himawari-card');
  for (let i = 0; i < SAMPLES.length; i++) {
    const sample = SAMPLES[i];
    const card = cards[i];
    const nintei = card.querySelector('[data-sample="nintei"]');

    card.querySelector('[data-sample="name"]').textContent = sample.name;

    if (sample.avatar) {
      card.querySelector('[data-sample="avatar"]').src = sample.avatar;
    }

    if (sample.oshirase) {
      card.querySelector('[data-sample="oshirase"]').textContent = sample.oshirase;
    } else {
      card.querySelector('[data-sample="oshirase"]').style.display = 'none';
    }

    if (sample.oshirase_label) {
      card.querySelector('[data-sample="oshirase_label"]').textContent = sample.oshirase_label;
    } else {
      card.querySelector('[data-sample="oshirase_label"]').style.display = 'none';
    }

    if(sample.select) {
      card.classList.add('select-border');
      card.querySelector('[data-sample="card-corner"]').classList.add('select-corner');
    }

    if (sample.nintei) {
      nintei.classList.add('badge-nintei-sien');
      nintei.textContent = sample.nintei;
    }
  }
}

// ready イベント
document.addEventListener('DOMContentLoaded',initSamples);

$(document).on('change', '.btn-group.btn-group-toggle[data-toggle="buttons"] > .btn > input[type="radio"]', function(e) {
  const radio = $(this);
  const group = radio.closest('.btn-group');
  group.children('.active').removeClass('active');

  radio.parent().addClass('active');
});
