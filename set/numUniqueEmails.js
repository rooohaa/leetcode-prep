var numUniqueEmails = function (emails) {
  const set = new Set()

  function normalizeEmail(email) {
    let [localName, domain] = email.split('@')
    localName = localName.split('+')[0]
    localName = localName.replaceAll('.', '')

    return `${localName}@${domain}`
  }

  for (let email of emails) {
    const em = normalizeEmail(email)
    set.add(em)
  }

  return set.size
}

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com',
  ])
)
