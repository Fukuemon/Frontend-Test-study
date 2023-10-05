// ランタイム挙動を再現する方推論
/**
 * getMessage関数は、与えられた名前に基づいて特定の挨拶メッセージを返します。
 * 名前が提供されていない、もしくはundefinedの場合は、匿名の挨拶メッセージを返します。
 *
 * @param name 名前の文字列もしくはundefined
 * @returns 挨拶メッセージの文字列
 */

function getMessage(name: string | undefined) {
  // 入力されたnameを変数aに格納
  const a = name; // ここでaはstring | undefined型と推論される
  if (!name) {
    return "Hello anonymous!";
  }

  // 名前が存在する場合、その名前を変数bに格納
  const b = name; // ここでbはstring型と推論される
  return `Hello ${name.toUpperCase()}`;
}

/**
 * checkType関数は、引数として "A", "B", "C" のいずれかの文字列を受け取り、
 * それに基づいて特定の文字列を返す関数です。
 *
 * @param type "A" | "B" | "C" のいずれかの文字列
 * @returns 文字列 "valid type" もしくは何も返さない (undefined)
 */

function checkType(type: "A" | "B" | "C"): string {
  // 返却するデフォルトのメッセージを定義
  const message: string = "valid type";

  // typeが"A"の場合、"valid type"を返す
  if (type === "A") {
    return message;
  }

  // typeが"B"の場合も、"valid type"を返す
  if (type === "B") {
    return message;
  }

  // TODO: typeが"C"の場合の処理が未定義。
  // 必要に応じて、適切な戻り値を返すか、エラーをスローする処理を追加する必要があります。
  // 下記の行をアンコメントすると、不正なtypeが与えられた場合にエラーがスローされる。
  // throw new Error("invalid type")
}

// 付け加えた後
function checkType2(type: "A" | "B" | "C"): string {
  const message: string = "valid type";
  if (type === "A") {
    return message;
  }
  if (type === "B") {
    return message;
  }
  throw new Error("invalid type");
}
