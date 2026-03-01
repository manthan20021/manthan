"use client"
import { HandPlatter } from 'lucide-react'
import React from 'react'
import ServicesCard from './ServicesCard'
import SkillsCard from './SkillsCard'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";


const Setion3 = () => {

const ServisesData = [
{
    "titel": "Dynamic Web Apps",
    "url":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmVuZGluZy11cC1kb3duLWljb24gbHVjaWRlLXRyZW5kaW5nLXVwLWRvd24iPjxwYXRoIGQ9Ik0xNC44MjggMTQuODI4IDIxIDIxIi8+PHBhdGggZD0iTTIxIDE2djVoLTUiLz48cGF0aCBkPSJtMjEgMy05IDktNC00LTYgNiIvPjxwYXRoIGQ9Ik0yMSA4VjNoLTUiLz48L3N2Zz4="
},
{
    "titel": "Frontend Apps",
    "url":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYXlvdXQtcGFuZWwtbGVmdC1pY29uIGx1Y2lkZS1sYXlvdXQtcGFuZWwtbGVmdCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMTQiIHk9IjMiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMTQiIHk9IjE0IiByeD0iMSIvPjwvc3ZnPg=="
},
{
    "titel": "Backend Heavy Apps",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZXJ2ZXItaWNvbiBsdWNpZGUtc2VydmVyIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iOCIgeD0iMiIgeT0iMiIgcng9IjIiIHJ5PSIyIi8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHg9IjIiIHk9IjE0IiByeD0iMiIgcnk9IjIiLz48bGluZSB4MT0iNiIgeDI9IjYuMDEiIHkxPSI2IiB5Mj0iNiIvPjxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4="
},
{
    "titel": "AI-Powered Apps",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib3QtaWNvbiBsdWNpZGUtYm90Ij48cGF0aCBkPSJNMTIgOFY0SDgiLz48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHg9IjQiIHk9IjgiIHJ4PSIyIi8+PHBhdGggZD0iTTIgMTRoMiIvPjxwYXRoIGQ9Ik0yMCAxNGgyIi8+PHBhdGggZD0iTTE1IDEzdjIiLz48cGF0aCBkPSJNOSAxM3YyIi8+PC9zdmc+"
  },
{
    "titel": "Responsive Design",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10YWJsZXQtc21hcnRwaG9uZS1pY29uIGx1Y2lkZS10YWJsZXQtc21hcnRwaG9uZSI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjE0IiB4PSIzIiB5PSI4IiByeD0iMiIvPjxwYXRoIGQ9Ik01IDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjE2YTIgMiAwIDAgMS0yIDJoLTIuNCIvPjxwYXRoIGQ9Ik04IDE4aC4wMSIvPjwvc3ZnPg=="
},
{
    "titel": "SEO",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZWFyY2gtaWNvbiBsdWNpZGUtc2VhcmNoIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg=="
},
{
    "titel": "Debugging",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1idWctb2ZmLWljb24gbHVjaWRlLWJ1Zy1vZmYiPjxwYXRoIGQ9Ik0xMiAyMHYtOCIvPjxwYXRoIGQ9Ik0xMi42NTYgN0gxNGE0IDQgMCAwIDEgNCA0djEuMzQ0Ii8+PHBhdGggZD0iTTE0LjEyIDMuODggMTYgMiIvPjxwYXRoIGQ9Ik0xNy4xMjMgMTcuMTIzQTYgNiAwIDAgMSA2IDE0di0zYTQgNCAwIDAgMSAxLjcyLTMuMjg3Ii8+PHBhdGggZD0ibTIgMiAyMCAyMCIvPjxwYXRoIGQ9Ik0yMSA1YTQgNCAwIDAgMS0zLjU1IDMuOTciLz48cGF0aCBkPSJNMjIgMTNoLTMuMzQ0Ii8+PHBhdGggZD0iTTMgMjFhNCA0IDAgMCAxIDMuODEtNCIvPjxwYXRoIGQ9Ik0zIDVhNCA0IDAgMCAwIDMuNTUgMy45NyIvPjxwYXRoIGQ9Ik02IDEzSDIiLz48cGF0aCBkPSJtOCAyIDEuODggMS44OCIvPjxwYXRoIGQ9Ik05LjcxMiA0LjA2QTMgMyAwIDAgMSAxNSA2djEuMTMiLz48L3N2Zz4="
},
{
    "titel": "SaaS Platforms",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb25pdG9yLWNsb3VkLWljb24gbHVjaWRlLW1vbml0b3ItY2xvdWQiPjxwYXRoIGQ9Ik0xMSAxM2EzIDMgMCAxIDEgMi44My00SDE0YTIgMiAwIDAgMSAwIDR6Ii8+PHBhdGggZD0iTTEyIDE3djQiLz48cGF0aCBkPSJNOCAyMWg4Ii8+PHJlY3QgeD0iMiIgeT0iMyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiByeD0iMiIvPjwvc3ZnPg=="
},
{
    "titel": "Personal Portfolio",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1nYWxsZXJ5LWhvcml6b250YWwtZW5kLWljb24gbHVjaWRlLWdhbGxlcnktaG9yaXpvbnRhbC1lbmQiPjxwYXRoIGQ9Ik0yIDd2MTAiLz48cGF0aCBkPSJNNiA1djE0Ii8+PHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjE4IiB4PSIxMCIgeT0iMyIgcng9IjIiLz48L3N2Zz4="
},


]

const SkillsData = [
{
    "titel": "Web Developmen",
    "url":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYXlvdXQtcGFuZWwtbGVmdC1pY29uIGx1Y2lkZS1sYXlvdXQtcGFuZWwtbGVmdCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMTQiIHk9IjMiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMTQiIHk9IjE0IiByeD0iMSIvPjwvc3ZnPg=="
},
{
    "titel": "React",
    "url":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tZXNzYWdlLXNxdWFyZS1jb2RlLWljb24gbHVjaWRlLW1lc3NhZ2Utc3F1YXJlLWNvZGUiPjxwYXRoIGQ9Ik0yMiAxN2EyIDIgMCAwIDEtMiAySDYuODI4YTIgMiAwIDAgMC0xLjQxNC41ODZsLTIuMjAyIDIuMjAyQS43MS43MSAwIDAgMSAyIDIxLjI4NlY1YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnoiLz48cGF0aCBkPSJtMTAgOC0zIDMgMyAzIi8+PHBhdGggZD0ibTE0IDE0IDMtMy0zLTMiLz48L3N2Zz4="
},
{
    "titel": "Nextjs",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tZXNzYWdlLXNxdWFyZS1jb2RlLWljb24gbHVjaWRlLW1lc3NhZ2Utc3F1YXJlLWNvZGUiPjxwYXRoIGQ9Ik0yMiAxN2EyIDIgMCAwIDEtMiAySDYuODI4YTIgMiAwIDAgMC0xLjQxNC41ODZsLTIuMjAyIDIuMjAyQS43MS43MSAwIDAgMSAyIDIxLjI4NlY1YTIgMiAwIDAgMSAyLTJoMTZhMiAyIDAgMCAxIDIgMnoiLz48cGF0aCBkPSJtMTAgOC0zIDMgMyAzIi8+PHBhdGggZD0ibTE0IDE0IDMtMy0zLTMiLz48L3N2Zz4="
  },
{
    "titel": "Nodejs",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZXhhZ29uLWljb24gbHVjaWRlLWhleGFnb24iPjxwYXRoIGQ9Ik0yMSAxNlY4YTIgMiAwIDAgMC0xLTEuNzNsLTctNGEyIDIgMCAwIDAtMiAwbC03IDRBMiAyIDAgMCAwIDMgOHY4YTIgMiAwIDAgMCAxIDEuNzNsNyA0YTIgMiAwIDAgMCAyIDBsNy00QTIgMiAwIDAgMCAyMSAxNnoiLz48L3N2Zz4="
  },
{
    "titel": "Express",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS14LWljb24gbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+"
},
{
    "titel": "Javascript",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLWJyYWNlcy1pY29uIGx1Y2lkZS1maWxlLWJyYWNlcyI+PHBhdGggZD0iTTYgMjJhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyLjQgMi40IDAgMCAxIDEuNzA0LjcwNmwzLjU4OCAzLjU4OEEyLjQgMi40IDAgMCAxIDIwIDh2MTJhMiAyIDAgMCAxLTIgMnoiLz48cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIvPjxwYXRoIGQ9Ik0xMCAxMmExIDEgMCAwIDAtMSAxdjFhMSAxIDAgMCAxLTEgMSAxIDEgMCAwIDEgMSAxdjFhMSAxIDAgMCAwIDEgMSIvPjxwYXRoIGQ9Ik0xNCAxOGExIDEgMCAwIDAgMS0xdi0xYTEgMSAwIDAgMSAxLTEgMSAxIDAgMCAxLTEtMXYtMWExIDEgMCAwIDAtMS0xIi8+PC9zdmc+"
},
{
    "titel": "TypeScript",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLXR5cGUtaWNvbiBsdWNpZGUtZmlsZS10eXBlIj48cGF0aCBkPSJNNiAyMmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg4YTIuNCAyLjQgMCAwIDEgMS43MDQuNzA2bDMuNTg4IDMuNTg4QTIuNCAyLjQgMCAwIDEgMjAgOHYxMmEyIDIgMCAwIDEtMiAyeiIvPjxwYXRoIGQ9Ik0xNCAydjVhMSAxIDAgMCAwIDEgMWg1Ii8+PHBhdGggZD0iTTExIDE4aDIiLz48cGF0aCBkPSJNMTIgMTJ2NiIvPjxwYXRoIGQ9Ik05IDEzdi0uNWEuNS41IDAgMCAxIC41LS41aDVhLjUuNSAwIDAgMSAuNS41di41Ii8+PC9zdmc+"
},
{
    "titel": "Git and GitHub",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1naXQtZm9yay1pY29uIGx1Y2lkZS1naXQtZm9yayI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxOCIgcj0iMyIvPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSI2IiByPSIzIi8+PHBhdGggZD0iTTE4IDl2MmMwIC42LS40IDEtMSAxSDdjLS42IDAtMS0uNC0xLTFWOSIvPjxwYXRoIGQ9Ik0xMiAxMnYzIi8+PC9zdmc+"
},
{
    "titel": "Html and css",
    "url": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NzNkZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2RlLXhtbC1pY29uIGx1Y2lkZS1jb2RlLXhtbCI+PHBhdGggZD0ibTE4IDE2IDQtNC00LTQiLz48cGF0aCBkPSJtNiA4LTQgNCA0IDQiLz48cGF0aCBkPSJtMTQuNSA0LTUgMTYiLz48L3N2Zz4="
},


]

const images = [
  "/standard.png",
  "/basic.png",
  "/premium.png",
];
  
  return (
    <div className='sm:h-full w-full h-auto sm:w-142.5 flex sm:flex-col flex-wrap justify-between items-center '>
      <div className=' w-full h-auto rounded-lg flex sm:flex-row flex-col items-center justify-between sm:mb-0 mb-3'>


        {/* pricing */}
        <div className='bg-[#101010] relative border border-[#141414] h-[369px] w-[344px] overflow-hidden sm:mb-0 mb-3 rounded-lg'>

        <div className="absolute  left-0 top-0 bottom-0 w-full  bg-gradient-to-t from-[#101010] via-[#101010]/50  to-transparent z-10 pointer-events-none"></div>

          <Image
          width={344}
          height={369}
          src="/pricing.png"
          className='h-full'
          />

          <Link href="/Pricing">
        <button className='h-[40px] w-[200px] cursor-pointer z-10 rounded-md bg-[#773dff] text-white absolute bottom-5 left-[70px] '>Get Your Plan</button>
        </Link>

        </div>

        {/* Services */}
        <div className='bg-[#101010] border hide-scrollbar overflow-y-scroll  border-[#141414] h-[369px] sm:w-[215px] w-[344px] rounded-lg'>


          {/* heding */}
          <div className='w-full flex flex-col items-center justify-center py-3 border-b border-b-[#202020] '>
          <h1 className='w-full h-auto flex items-center justify-center'>
            <HandPlatter color="#773dff" />
            <span className='font-thin ml-1 text-sm text-gray-400'>Services</span>
              </h1>
              <h2 className='text-xl text-white'>
                What We Offer
              </h2>
        </div>

        {/* section */}
        <div className='pt-2 flex flex-col justify-between  px-1 '>
          {
            ServisesData.map(item => {
              return <ServicesCard servises={item} />
            })
          }
        </div>

        </div>
      </div>

      

      <div className=' w-full sm:h-[338px] h-auto rounded-lg  flex sm:flex-row flex-col items-center justify-between'>

          {/* //skills */}
        <div className='bg-[#101010] border hide-scrollbar overflow-y-scroll border-[#141414] h-full sm:w-[213px] w-full sm:mb-0 mb-3 rounded-lg'>

          {/* heding */}
          <div className='w-full flex flex-col items-center justify-center py-3 border-b border-b-[#202020] '>
          <h1 className='w-full h-auto flex items-center justify-center'>
            <HandPlatter color="#773dff" />
            <span className='font-thin ml-1 text-sm text-gray-400'>Skills</span>
              </h1>
              <h2 className='text-xl text-white'>
                Expertise
              </h2>
        </div>

        {/* skills */}

         <div className='pt-2 flex flex-col justify-between  px-1 '>
          {
            SkillsData.map(item => {
              return <SkillsCard skills={item}/>
            })
          }
         </div>


        </div>

        {/* blogs */}
        <div className='bg-[#101010] relative border border-[#141414] h-full sm:w-[342px] w-full sm:mb-0 mb-3  rounded-lg flex items-center justify-center'>
        <div className="absolute  left-0 top-0 bottom-0 w-full  bg-gradient-to-t from-[#101010] via-[#101010]/30  to-transparent z-10 pointer-events-none"></div>

          <Image
              src="/blog.png"
              alt="project img"
              width={184}
              height={330}
              className="rounded-lg object-cover w-[184px] h-full"
            />
        <button className='h-[40px] w-[150px] cursor-pointer z-10 rounded-md bg-[#773dff] text-white absolute bottom-5  '>Blogs</button>

        </div>

       
          

          {/* offers */}

      {/* <div className=" border sm:bg-white border-[#141414] h-full sm:w-[184px] w-full rounded-lg overflow-hidden relative">
      
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%", "-200%"] }}
        transition={{
          duration: 10,
          ease: "easeOut",
          repeat: Infinity,
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-[184px] flex items-center justify-center">
            <Image
              src={src}
              alt="project img"
              width={184}
              height={330}
              className="rounded-lg object-cover w-[184px] h-full"
            />
          </div>
        ))}
      </motion.div>
      </div> */}


      </div>
    </div>
  )
}

export default Setion3
