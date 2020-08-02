import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";

export default () =>
  S.list()
    .title("Content")
    .showIcons()
    .items([
      S.listItem()
        .title("Configuración Home")
        .child(
          S.document().schemaType("homeSettings").documentId("homeSettings")
        )
        .icon(MdSettings),
      // Add a visual divider (optional)
      S.divider(),
      // List out the rest of the document types, but filter out the config type
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["homeSettings", "hero", "userReviews"].includes(listItem.getId())
      ),
    ]);
