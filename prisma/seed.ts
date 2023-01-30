import { prisma } from "../src/config/database";

async function main() {
  const suppliers = await prisma.supplier.createMany({
    data: [
      {
        name: "Fornecedor 1",
        email: "fornecedor1@email.com",
        phoneNumber: "11 1111-1111",
      },
      {
        name: "Fornecedor 2",
        email: "fornecedor2@email.com",
        phoneNumber: "22 2222-2222",
      },
    ],
  });

  console.log("Dados inseridos com sucesso");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
