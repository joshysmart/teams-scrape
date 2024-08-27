const getAll = () => {
  let pageLinks = document.querySelectorAll(".page-link");
  const lastLinkWithPage = pageLinks[pageLinks.length - 2];
  const lastIndex = +lastLinkWithPage.textContent;

  let myHtml = ``;

  for (i = 0; i < lastIndex; i++) {
    let pageLinks = document.querySelectorAll(".page-link");
    let table = document.querySelector(".dataTable");
    let tbody = table.querySelector("tbody");
    const lastLink = lastIndex > 7 ? 8 : lastIndex + 1;

    myHtml += tbody.innerHTML;
    pageLinks[lastLink].click();
  }

  return myHtml;
};
