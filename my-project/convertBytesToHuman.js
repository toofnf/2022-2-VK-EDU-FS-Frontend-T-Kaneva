/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  return (
      (typeof(bytes) !== 'number' ||
          !isFinite(bytes) ||
          bytes < 0) ?
          false :

          (bytes >= 0 && bytes < 2 ** 10) ?
              `${Math.round(bytes * 100) / 100} B` :

              (bytes >= 2 ** 10 && bytes < 2 ** 20) ?
                  `${Math.round(bytes / 2 ** 10 * 100) / 100} KB` :

                  (bytes >= 2 ** 20 && bytes < 2 ** 30) ?
                      `${Math.round(bytes / 2 ** 20 * 100) / 100} MB` :

                      (bytes >= 2 ** 30 && bytes < 2 ** 40) ?
                          `${Math.round(bytes / 2 ** 30 * 100) / 100} GB` :

                          (bytes >= 2 ** 40 && bytes < 2 ** 50) ?
                              `${Math.round(bytes / 2 ** 40 * 100) / 100} TB` :
                              `${Math.round(bytes / 2 ** 50 * 100) / 100} PB`
  );
}
