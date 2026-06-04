const MENU = [
  {
    id: "margheritas",
    category: "classic",
    name: "玛格丽特",
    price: 68,
    desc: "圣马扎诺番茄、新鲜罗勒、马苏里拉与水牛芝士，经典红白绿三色。",
    tags: ["招牌", "素食可选"],
    hot: true,
  },
  {
    id: "pepperoni",
    category: "classic",
    name: "意式辣肠",
    price: 78,
    desc: "进口辣肠片铺满饼面，微辣咸香，窑烤边缘微微焦脆。",
    tags: ["热销"],
    hot: true,
  },
  {
    id: "quattro",
    category: "classic",
    name: "四季披萨",
    price: 88,
    desc: "洋蓟、火腿、蘑菇、橄榄四象限拼盘，一份尝遍四种风味。",
    tags: ["分享"],
    hot: false,
  },
  {
    id: "funghi",
    category: "classic",
    name: "野菌松露",
    price: 82,
    desc: "混合野菌、黑松露酱与帕尔玛干酪，香气浓郁不腻。",
    tags: ["素食"],
    hot: false,
  },
  {
    id: "nduja",
    category: "special",
    name: "卡拉布里亚辣抹酱",
    price: 92,
    desc: "意大利 nduja 香辣猪肉抹酱配蜂蜜 drizzle，甜辣平衡。",
    tags: ["限定", "微辣"],
    hot: true,
  },
  {
    id: "burrata",
    category: "special",
    name: "布拉塔与无花果",
    price: 96,
    desc: "烤无花果、布拉塔芝士球、芝麻菜与陈年黑醋，清爽开胃。",
    tags: ["季节"],
    hot: false,
  },
  {
    id: "cream-pizza",
    category: "special",
    name: "奶油披萨",
    price: 89,
    desc: "淡奶油白酱底、马苏里拉与蒜香蘑菇，奶香绵密，窑烤后边缘微焦。",
    tags: ["奶香", "白酱"],
    hot: false,
  },
  {
    id: "seafood",
    category: "special",
    name: "蒜香海鲜",
    price: 108,
    desc: "虾仁、蛤蜊与鱿鱼圈，白葡萄酒蒜香酱，柠檬皮提鲜。",
    tags: ["海鲜"],
    hot: false,
  },
  {
    id: "bbq-chicken",
    category: "special",
    name: "烟熏 BBQ 鸡肉",
    price: 86,
    desc: "低温鸡胸撕条、烟熏 BBQ 酱、红洋葱与青椒，美式 fusion。",
    tags: [],
    hot: false,
  },
  {
    id: "garlic-bread",
    category: "side",
    name: "窑烤蒜香面包",
    price: 28,
    desc: "橄榄油、蒜蓉与欧芹，外酥内软，蘸番茄汤更佳。",
    tags: ["小食"],
    hot: false,
  },
  {
    id: "salad",
    category: "side",
    name: "凯撒沙拉",
    price: 42,
    desc: "罗马生菜、帕玛森脆片、自制凯撒酱与面包丁。",
    tags: ["沙拉"],
    hot: false,
  },
  {
    id: "cola",
    category: "side",
    name: "精酿苏打 / 可乐",
    price: 18,
    desc: "冰镇汽水与本地精酿苏打多款可选，详询店员。",
    tags: ["饮品"],
    hot: false,
  },
  {
    id: "tiramisu",
    category: "side",
    name: "提拉米苏",
    price: 38,
    desc: "马斯卡彭、浓缩咖啡与可可粉，每日限量手作。",
    tags: ["甜品"],
    hot: false,
  },
];

const grid = document.getElementById("menu-grid");
const navBtns = document.querySelectorAll(".nav-btn");

function renderCard(item) {
  const li = document.createElement("li");
  li.className = "menu-card";
  li.dataset.category = item.category;

  const tagsHtml = item.tags
    .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
    .join("");
  const hotHtml = item.hot ? `<span class="tag hot">推荐</span>` : "";

  li.innerHTML = `
    <div class="card-top">
      <h3 class="card-title">${escapeHtml(item.name)}</h3>
      <p class="card-price">¥${item.price}<span> 起</span></p>
    </div>
    <p class="card-desc">${escapeHtml(item.desc)}</p>
    <div class="card-tags">${hotHtml}${tagsHtml}</div>
  `;

  return li;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderMenu(filter) {
  grid.innerHTML = "";
  const items =
    filter === "all" ? MENU : MENU.filter((m) => m.category === filter);
  items.forEach((item) => grid.appendChild(renderCard(item)));
}

navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.filter);
  });
});

renderMenu("all");
