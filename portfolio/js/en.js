let isUsingSheet = false;
let originalContents = {}; // 儲存原始內容

// 這個函數會切換資料來源
function toggleData() {
  // 你要更新的所有元素
  const elementIds = [
    "en",
    "self-intro",
    "exp1",
    "exp2",
    "exp3",
    "exp4",
    "exp5",
    "exp6",
    "pro-item1",
    "pro-item2",
    "pro-item3",
    "pro-item4",
    "work1",
    "work2",
    "work3",
    "work4",
    "work5",
    "work6",
    "work7",
    "work8",
    "design-team",
    "book-title",
    "book-intro1",
    "book-intro2",
    "book-intro3",
    "book-intro4",
    "book-name",
    "font-title",
    "font-intro",
    "font-sub",
    "font-name",
    "flower-title",
    "flower-intro",
    "flower-sub1",
    "flower-sub2",
    "flower-sub3",
    "flower-name",
    "downgoweb-title",
    "downgoweb-intro1",
    "downgoweb-intro2",
    "downgoweb-intro3",
    "downgoweb-intro4",
    "downgoweb-intro5",
    "downgoweb-intro6",
    "downgoweb-intro7",
    "downgoweb-intro8",
    "downgoweb-intro9",
    "downgoweb-intro10",
    "downgoweb-intro11",
    "downgoweb-intro12",
    "downgoweb-intro13",
    "downgoweb-sub",
    "downgoweb-link",
    "downgoweb-name",
    "downgo-title",
    "downgo-intro1",
    "downgo-intro2",
    "downgo-intro3",
    "downgo-intro4",
    "downgo-intro5",
    "downgo-name",
    "milk-title",
    "milk-intro",
    "milk-sub",
    "milk-link",
    "milk-name",
    "paper-title",
    "paper-intro",
    "paper-sub1",
    "paper-sub2",
    "paper-sub3",
    "paper-sub4",
    "paper-name",
    "ticket-title",
    "ticket-intro",
    "ticket-name",
    "color-title",
    "color-intro1",
    "color-intro2",
    "color-intro3",
    "color-intro4",
    "color-intro5",
    "color-intro6",
    "color-intro7",
    "color-intro8",
    "color-intro9",
    "color-intro10",
    "color-sub1",
    "color-intro11",
    "color-intro12",
    "color-intro13",
    "color-intro14",
    "color-intro15",
    "color-intro16",
    "color-sub2",
    "TA-caption",
    "color-intro18",
    "color-intro19",
    "color-intro20",
    "color-intro21",
    "color-intro22",
    "color-intro23",
    "color-intro24",
    "color-intro25",
    "color-intro26",
    "color-sub3",
    "color-update",
    "color-name",
    "self-title",
    "self-intro1",
    "self-intro2",
    "self-intro3",
    "self-intro4",
    "self-intro5",
    "self-intro6",
    "self-intro7",
    "self-intro8",
    "self-intro9",
    "self-intro10",
    "self-sub1",
    "self-intro11",
    "self-sub2",
    "self-intro12",
    "self-intro13",
    "self-intro14",
    "self-sub3",
    "self-link",
    "self-sub4",
    "self-sub5",
    "self-name",
    "metro-title",
    "metro-intro1",
    "metro-sub1",
    "metro-intro2",
    "re",
    "user",
    "metro-intro5",
    "metro-intro6",
    "metro-intro7",
    "metro-intro8",
    "metro-intro9",
    "metro-intro10",
    "metro-intro11",
    "metro-intro12",
    "metro-intro13",
    "metro-intro14",
    "metro-intro15",
    "metro-intro16",
    "metro-intro17",
    "metro-intro18",
    "metro-intro19",
    "metro-intro20",
    "metro-intro21",
    "metro-sub2",
    "metro-intro22",
    "metro-intro23",
    "metro-intro24",
    "metro-intro25",
    "metro-intro26",
    "metro-intro27",
    "metro-intro28",
    "metro-intro29",
    "metro-intro30",
    "metro-intro31",
    "metro-intro32",
    "metro-intro33",
    "metro-intro34",
    "metro-intro35",
    "metro-intro36",
    "metro-intro37",
    "metro-intro38",
    "metro-intro39",
    "metro-intro40",
    "metro-intro41",
    "metro-intro42",
    "metro-sub3",
    "metro-sub4",
    "metro-intro43",
    "metro-intro44",
    "metro-intro45",
    "metro-intro46",
    "metro-intro47",
    "metro-intro48",
    "metro-sub5",
    "metro-intro49",
    "metro-intro50",
    "metro-intro51",
    "metro-intro52",
    "metro-sub6",
    "metro-sub7",
    "metro-intro53",
    "metro-intro54",
    "metro-intro55",
    "metro-intro56",
    "metro-intro57",
    "metro-name",
    "metro-intro58",
  ];

  // 如果尚未載入 Google Sheet 資料，則載入
  if (!isUsingSheet) {
    // 儲存原本的內容
    elementIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        originalContents[id] = el.innerText; // 使用 innerText 儲存文字內容
      }
    });

    // 載入 Google Sheet 資料
    loadSheetData();
    isUsingSheet = true;
  } else {
    // 回到原本的 HTML 資料
    elementIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.innerText = originalContents[id]; // 使用 innerText 恢復文字內容
      }
    });
    isUsingSheet = false;
  }
}

// 載入 Google Sheet 資料
function loadSheetData() {
  const apiKey = "AIzaSyBr8Xtktsw-LrmKSFRyFYNDYg0lOkrFkQo"; // 你的 API 金鑰
  const spreadsheetId = "1QLYl8O5vs5YqzSLUw3vUO6zEuY5_8664SlQhFUUt68g"; // 你的試算表 ID
  const range = "index!A:B"; // 試算表的範圍

  const url = `https://sheets.googleapis.com/v4/spreadsheets/1QLYl8O5vs5YqzSLUw3vUO6zEuY5_8664SlQhFUUt68g/values/index!A:B?key=AIzaSyBr8Xtktsw-LrmKSFRyFYNDYg0lOkrFkQo`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const rows = data.values;
      if (!rows) {
        throw new Error("找不到資料，可能是權限或工作表名稱錯誤。");
      }

      // 遍歷每一行資料，並更新對應的元素
      rows.slice(1).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.innerText = value; // 使用 innerText 更新文字內容
      });
    })
    .catch((error) => {
      console.error("讀取試算表失敗:", error);
    });
}

// 用來顯示切換效果的範例按鈕
document.getElementById("en").addEventListener("click", () => {
  if (isUsingSheet) {
    // 當前顯示的是 Google Sheets 資料，則切換回原本的資料
    toggleData();
  } else {
    // 當前顯示的是原本資料，則切換到 Google Sheets 資料
    toggleData();
  }
});
