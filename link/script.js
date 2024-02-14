
  function getImageUrl(pokemonData) {
    // 根據選擇的圖片類型獲取對應的圖片 URL
    let imageUrl = '';
    let shinyImageUrl = '';  // 新增這一行
    switch (pokemonData.imageType) {
      case 'front':
        imageUrl = pokemonData.sprites.front_default;
        shinyImageUrl = pokemonData.sprites.front_shiny;
        break;
      case 'back':
        imageUrl = pokemonData.sprites.back_default;
        shinyImageUrl = pokemonData.sprites.back_shiny;
        break;
      case 'official-artwork':
        imageUrl = pokemonData.sprites.other['official-artwork'].front_default;
        shinyImageUrl = pokemonData.sprites.other['official-artwork'].front_shiny;
        break;
      case 'Pokemon-home':
        imageUrl = pokemonData.sprites.other['home'].front_default;
        shinyImageUrl = pokemonData.sprites.other['home'].front_shiny;
        break;
      case 'showdown-front':
        imageUrl = pokemonData.sprites.other['showdown'].front_default;
        shinyImageUrl = pokemonData.sprites.other['showdown'].front_shiny;
        break;
      case 'showdown-back':
        imageUrl = pokemonData.sprites.other['showdown'].back_default;
        shinyImageUrl = pokemonData.sprites.other['showdown'].back_shiny;
        break;
      default:
        imageUrl = pokemonData.sprites.other['official-artwork'].front_default;
        shinyImageUrl = pokemonData.sprites.other['official-artwork'].front_shiny;
    }
    return {
      normal: `<img src="${imageUrl}" alt="Pokemon Image">`,
      shiny: `<img src="${shinyImageUrl}" alt="Shiny Pokemon Image">`
    };
  }
  // Generations -----------------------------------------------------------------------------
      // 獲取網址查詢字符串
      var queryString = window.location.search;

      // 解析查詢字符串
      var urlParams = new URLSearchParams(queryString);

      // 從查詢字符串中獲取 start 和 end 的值，如果沒有則使用預設值
      var start = urlParams.get('start') || 1;
      var end = urlParams.get('end') || 15;

      // 監聽所有按鈕的點擊事件
      $(".gen-button").click(function (event) {
        event.preventDefault(); // 阻止按鈕的默認行為

        // 獲取按鈕的文本（Generation 1、Generation 2等）
        var buttonText = $(this).text();

        // 定義每個世代的起始和結束數量
        var generations = {
          "Generation 1": { start: 1, end: 15 },
          "Generation 2": { start: 152, end: 251 },
          "Generation 3": { start: 252, end: 386 },
          "Generation 4": { start: 387, end: 493 },
          "Generation 5": { start: 494, end: 649 },
          "Generation 6": { start: 650, end: 721 },
          "Generation 7": { start: 722, end: 809 },
          "Generation 8": { start: 810, end: 905 },
          "Generation 9": { start: 906, end: 999 },
          // Generation 9 到1025有bug暫時先改道999
          "Generation All": { start: 1, end: 1025 },
          // 添加其他世代的數據
        };

        // 根據按鈕文本獲取對應的數據
        var data = generations[buttonText];

        // 設置新的 start 和 end 的值
        start = data.start;
        end = data.end;

        // 將數據轉換為查詢字符串
        var queryString = $.param({ start: start, end: end });

        // 使用 window.location.href 重新導向到相同頁面並附帶查詢字符串
        window.location.href = window.location.href.split('?')[0] + "?" + queryString;

        // 將結果顯示在 result 元素中

      });

      // Generations end-----------------------------------------------------------------------------
