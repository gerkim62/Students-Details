import { generateId, downloadCSV } from './utils.js'

const student_trs = document.querySelectorAll('tr')
const students = []
student_trs.forEach((tr, i) => {
  
  const tds = tr.querySelectorAll('td')
  const name = tds[1].innerText
  const letterLink = tds[2].querySelector('a').href
  const major = tds[3].innerText
  const id = generateId(name, 2311)
  const email = id.toLowerCase() + '@ueab.ac.ke'
  students.push({name:name,letterLink:letterLink,major:major,id:id,email:email})


})
    

downloadCSV(students,'students.csv')
/*(() => { const script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = () => { eruda.init() } })();
 */
