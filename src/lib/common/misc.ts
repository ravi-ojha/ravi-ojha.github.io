export const serializeJson = (jsonData) => {
	const jsonStr = JSON.stringify(jsonData, null, 2)
	return `<script type="application/ld+json">${jsonStr}</script>`
}


export const getRandomString = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
