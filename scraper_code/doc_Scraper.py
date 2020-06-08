import re, pyperclip, PyPDF2, magic
from PyPDF2 import PdfFileReader

# create a regex for phone numbers

phoneRegex = re.compile(r'''
# 415-555-0000, 555-0000, (415) 555-0000, 555-0000 ext 12345, ext. 12345, x12345
(
((\d\d\d)|(\(\d\d\d\)))?        # area code (optional)
(\s|-)                          # first seperator
\d\d\d                          # first 3 digits
-                               # separator
\d\d\d\d                        # last 4 digits
(((ext(\.)?\s)|x)               # extension (optional)
(\d{2,5}))?                     # extension number-part (optional)
)
''', re.VERBOSE)

#: create a regex for email addresses
emailRegex = re.compile(r'''
# some.+_thing@something.com
[a-zA-Z0-9.+]+ # name part
@ # @ symbol
[a-zA-Z0-9.+]+ # domain name part
''', re.VERBOSE)

# function to extract phone numbers
def phone_extractor(path):
    with open(path, 'rb') as f:
        pdf = PdfFileReader(f)
        # get all pages
        pages = (pdf.getNumPages())
        content = ""
        for i in range(pages):
            content += pdf.getPage(i).extractText()
            phone = content.replace('\n', ' ').replace(' ', '')
        return phone
# function to extract text

def text_extractor(path):
    with open(path, 'rb') as f:
        pdf = PdfFileReader(f)
        # get all pages
        pages = (pdf.getNumPages())
        content = ""
        for i in range(pages):
            content += pdf.getPage(i).extractText()
    return content


phone = phone_extractor('./pdf_test.pdf')
text = text_extractor('./pdf_test.pdf')
# get the text off the clipboard

# Extract the email/phone from this text
extractedPhone = phoneRegex.findall(phone)
extractedEmail = emailRegex.findall(text)

# taking the first index of (extracted phone which has whole phone number)
allPhoneNumbers = []
for phoneNumber in extractedPhone:
    allPhoneNumbers.append(phoneNumber[0])

# copy the extracted email/phone to clipboard
print(allPhoneNumbers) 
print(extractedEmail)
results = '\n'.join(allPhoneNumbers) + '\n'.join(extractedEmail)
pyperclip.copy(results)