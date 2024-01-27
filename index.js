const fs = require("fs");

const filePath = "./ivsite.articles.json";

try {
  const dataArray = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (let i = 0; i < dataArray.length; i++) {
    const data = dataArray[i];
    data.additional_script = data.subTitle;
    data.slug = data.route;
    data.is_features = true;
    data.coverImage = data.cover;
    const jsonLdData = {
      type: "Article",
      data: {
        type: "Article",
        headline: data.title,
        authorType: "Organization",
        authorName: "https://implevista.com",
        organizationName: "https://implevista.com",
        organizationLogo: "https://implevista.com",
        datePublished: "2023-12-24",
        dateModified: "",
        images: [data?.coverImage],
      },
    };

    const metaData = [
      {
        key: "property",
        value: "og:locale",
        content: "en_US",
      },
      {
        key: "property",
        value: "og:type",
        content: "article",
      },
      {
        key: "property",
        value: "og:title",
        content: data.title,
      },
      {
        key: "property",
        value: "og:description",
        content: data.subTitle,
      },
      {
        key: "property",
        value: "og:url",
        content: "https://implevista.com",
      },
      {
        key: "property",
        value: "site_name",
        content: data.slug,
      },
      {
        key: "property",
        value: "og:image",
        content: data.coverImage,
      },
      {
        key: "property",
        value: "og:image:alt",
        content: data.title,
      },
      {
        key: "property",
        value: "og:image:width",
        content: "760",
      },
      {
        key: "property",
        value: "og:image:height",
        content: "420",
      },
      {
        name: "robots",
        content: "max-image-preview:large",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: data.title,
      },
      {
        name: "twitter:image",
        content: data.coverImage,
      },
    ];

    data.metaData = metaData;
    data.jsonLdOutputData = [jsonLdData];
    data.articleId = i + 1;
    data.description = data.content;
    data.title = data.title;
    data.shortDescription = data.subTitle;
    data.is_featured = true;
    data.is_active = true;
    data.categories = "65880f01dc606f921f0a1163";
    // Delete unused fields
    delete data.content;
    delete data.route;
  }

  fs.writeFileSync(filePath, JSON.stringify(dataArray, null, 2));

  console.log("File content replaced successfully.");
} catch (error) {
  console.error("Error:", error.message);
}
