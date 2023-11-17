-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_name" VARCHAR(30) NOT NULL,
    "middle_name" VARCHAR(30) NOT NULL,
    "last_name" VARCHAR(30) NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "bio" VARCHAR(500),
    "last_time_online" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sold_items" INTEGER NOT NULL DEFAULT 0,
    "joined" TIMESTAMP(3) NOT NULL,
    "total_items_placed" INTEGER NOT NULL,
    "items_placed_now" INTEGER NOT NULL,
    "categoryId" INTEGER,
    "storageId" INTEGER,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Buyer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_name" VARCHAR(30) NOT NULL,
    "middle_name" VARCHAR(30) NOT NULL,
    "last_name" VARCHAR(30) NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "bio" VARCHAR(500),
    "last_time_online" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bought_items" INTEGER NOT NULL DEFAULT 0,
    "joined" TIMESTAMP(3) NOT NULL,
    "sellerId" INTEGER,
    "storageId" INTEGER,
    "guarantId" INTEGER NOT NULL,

    CONSTRAINT "Buyer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "placed_items_number" INTEGER NOT NULL DEFAULT 0,
    "description" VARCHAR(50) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER,
    "name" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "placedAt" TIMESTAMP(3),
    "description" VARCHAR(500) NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "body" VARCHAR(500) NOT NULL,
    "buyerId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guarant" (
    "id" SERIAL NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "transferServiceId" INTEGER,
    "storageId" INTEGER,

    CONSTRAINT "Guarant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransferService" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "TransferService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "transferServiceId" INTEGER,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Storage" (
    "id" SERIAL NOT NULL,
    "transferServiceId" INTEGER,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller" ADD CONSTRAINT "Seller_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Buyer" ADD CONSTRAINT "Buyer_guarantId_fkey" FOREIGN KEY ("guarantId") REFERENCES "Guarant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "Buyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guarant" ADD CONSTRAINT "Guarant_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "Seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guarant" ADD CONSTRAINT "Guarant_transferServiceId_fkey" FOREIGN KEY ("transferServiceId") REFERENCES "TransferService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guarant" ADD CONSTRAINT "Guarant_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_transferServiceId_fkey" FOREIGN KEY ("transferServiceId") REFERENCES "TransferService"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Storage" ADD CONSTRAINT "Storage_transferServiceId_fkey" FOREIGN KEY ("transferServiceId") REFERENCES "TransferService"("id") ON DELETE SET NULL ON UPDATE CASCADE;
