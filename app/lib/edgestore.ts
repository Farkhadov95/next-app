"use client"

import { type edgeStoreRouter } from "../api/edgestore/[...edgestore]/route";
import { createEdgeStoreProvider } from "@edgestore/react";

export const {EdgeStoreProvider, useEdgeStore} = createEdgeStoreProvider<edgeStoreRouter>();
